import { Menu } from "react-admin";

export const CustomMenu = () => (
  <Menu>
    <Menu.DashboardItem />
    <Menu.ResourceItem name="customers" />
    <Menu.ResourceItem name="products" />
    <Menu.ResourceItem name="commands" />
    <Menu.ResourceItem name="reviews" />
  </Menu>
);
