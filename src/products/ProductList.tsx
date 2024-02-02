import {
  Datagrid,
  List,
  NumberField,
  ImageField,
  ReferenceField,
  TextField,
  BulkDeleteButton,
  BulkUpdateButton,
} from "react-admin";

export const ProductList = () => (
  <List>
    <Datagrid
      rowClick="show"
      bulkActionButtons={
        <>
          <BulkUpdateButton data={{ stock: 100 }} label="Refill stock" />
          <BulkDeleteButton />
        </>
      }
    >
      <TextField source="reference" />
      <ImageField
        source="thumbnail"
        sx={{
          "& .RaImageField-image": {
            margin: 0,
            width: "auto",
            maxHeight: 25,
            objectFit: "contain",
          },
        }}
      />
      <TextField source="description" />
      <ReferenceField source="category_id" reference="categories" />
      <NumberField
        source="price"
        options={{
          style: "currency",
          currency: "EUR",
        }}
      />
      <NumberField source="stock" />
    </Datagrid>
  </List>
);
