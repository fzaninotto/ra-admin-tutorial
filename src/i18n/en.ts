import englishMessages from "ra-language-english";

export default {
  ...englishMessages,
  pos: {
    dashboard: {
      monthly_revenue: "Monthly Revenue",
      new_orders: "New Orders",
      pending_reviews: "Pending Reviews",
      all_reviews: "See all reviews",
      new_customers: "New Customers",
      all_customers: "See all customers",
      pending_orders: "Pending Orders",
      order: {
        items:
          "by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items",
      },
    },
  },
};
