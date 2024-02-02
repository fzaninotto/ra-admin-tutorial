import { useMemo } from "react";
import { useGetList, Title } from "react-admin";
import { Box, Stack } from "@mui/material";
import { subDays, startOfDay } from "date-fns";

import MonthlyRevenue from "./MonthlyRevenue";
import NbNewOrders from "./NbNewOrders";
import PendingOrders from "./PendingOrders";
import PendingReviews from "./PendingReviews";
import NewCustomers from "./NewCustomers";

import { Order } from "../types";

interface OrderStats {
  revenue: number;
  nbNewOrders: number;
  pendingOrders: Order[];
}

interface State {
  nbNewOrders?: number;
  pendingOrders?: Order[];
  recentOrders?: Order[];
  revenue?: string;
}

const Dashboard = () => {
  const aMonthAgo = useMemo(() => subDays(startOfDay(new Date()), 30), []);

  const { data: orders } = useGetList<Order>("commands", {
    filter: { date_gte: aMonthAgo.toISOString() },
    sort: { field: "date", order: "DESC" },
    pagination: { page: 1, perPage: 50 },
  });

  const aggregation = useMemo<State>(() => {
    if (!orders) return {};
    const aggregations = orders
      .filter((order) => order.status !== "cancelled")
      .reduce(
        (stats: OrderStats, order) => {
          if (order.status !== "cancelled") {
            stats.revenue += order.total;
            stats.nbNewOrders++;
          }
          if (order.status === "ordered") {
            stats.pendingOrders.push(order);
          }
          return stats;
        },
        {
          revenue: 0,
          nbNewOrders: 0,
          pendingOrders: [],
        }
      );
    return {
      recentOrders: orders,
      revenue: aggregations.revenue.toLocaleString(undefined, {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
      nbNewOrders: aggregations.nbNewOrders,
      pendingOrders: aggregations.pendingOrders,
    };
  }, [orders]);

  const { nbNewOrders, pendingOrders, revenue } = aggregation;
  return (
    <>
      <Title defaultTitle="Posters Galore" />
      <Stack direction="row" gap={2} mt={3}>
        <Box flex={1}>
          <Stack direction="row" gap={2}>
            <MonthlyRevenue value={revenue} />
            <NbNewOrders value={nbNewOrders} />
          </Stack>
          <Box sx={{ marginTop: "1em", marginBottom: "1em" }}>
            <PendingOrders orders={pendingOrders} />
          </Box>
        </Box>
        <Stack direction="row" gap={2} flex={1}>
          <PendingReviews />
          <NewCustomers />
        </Stack>
      </Stack>
    </>
  );
};

export default Dashboard;
