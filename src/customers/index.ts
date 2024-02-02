import { ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import CustomerIcon from "@mui/icons-material/People";

export default {
  list: ListGuesser,
  edit: EditGuesser,
  show: ShowGuesser,
  icon: CustomerIcon,
  recordRepresentation: (record: any) =>
    record.first_name + " " + record.last_name,
};
