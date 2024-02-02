import { ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import OrderIcon from "@mui/icons-material/AttachMoney";

export default {
  list: ListGuesser,
  edit: EditGuesser,
  show: ShowGuesser,
  icon: OrderIcon,
  options: { label: "Orders" },
  recordRepresentation: "reference",
};
