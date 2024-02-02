import { ProductList } from "./ProductList";
import { ProductEdit } from "./ProductEdit";
import { ProductCreate } from "./ProductCreate";
import { ProductShow } from "./ProductShow";
import ProductIcon from "@mui/icons-material/Collections";

export default {
  list: ProductList,
  edit: ProductEdit,
  create: ProductCreate,
  show: ProductShow,
  icon: ProductIcon,
  recordRepresentation: "reference",
};
