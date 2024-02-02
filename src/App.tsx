import {
  Admin,
  CustomRoutes,
  Layout,
  LayoutProps,
  Resource,
} from "react-admin";
import { Route } from "react-router";

import { dataProvider } from "./dataProvider";
import products from "./products";
import reviews from "./reviews";
import customers from "./customers";
import orders from "./orders";
import queryClient from "./queryClient";
import authProvider from "./authProvider";
import i18nProvider from "./i18nProvider";
import Dashboard from "./dashboard/Dashboard";
import themes from "./themes";
import { Status } from "./Status";
import { CustomMenu } from "./CustomMenu";

const CustomLayout = (props: LayoutProps) => (
  <Layout menu={CustomMenu} {...props} />
);

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    queryClient={queryClient}
    authProvider={authProvider}
    i18nProvider={i18nProvider}
    dashboard={Dashboard}
    layout={CustomLayout}
    {...themes}
  >
    <Resource name="products" {...products} />
    <Resource name="reviews" {...reviews} />
    <Resource name="customers" {...customers} />
    <Resource name="commands" {...orders} />
    <Resource name="categories" recordRepresentation="name" />
    <CustomRoutes noLayout>
      <Route path="/status" element={<Status />} />
    </CustomRoutes>
  </Admin>
);
