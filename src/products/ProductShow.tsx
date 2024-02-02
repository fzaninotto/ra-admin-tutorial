import {
  NumberField,
  Show,
  TabbedShowLayout,
  TextField,
  ImageField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  DateField,
  ReferenceManyCount,
} from "react-admin";

export const ProductShow = () => (
  <Show>
    <TabbedShowLayout>
      <TabbedShowLayout.Tab label="Main">
        <TextField source="reference" />
        <ImageField source="thumbnail" />
        <NumberField source="price" />
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab label="Metadata">
        <TextField source="description" />
        <ReferenceField source="category_id" reference="categories" />
        <NumberField source="width" />
        <NumberField source="height" />
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab label="Stats">
        <NumberField source="stock" />
        <NumberField source="sales" />
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab
        label="Reviews"
        count={<ReferenceManyCount target="product_id" reference="reviews" />}
      >
        <ReferenceManyField target="product_id" reference="reviews">
          <Datagrid rowClick="edit" bulkActionButtons={false}>
            <ReferenceField source="customer_id" reference="customers" />
            <NumberField source="rating" />
            <TextField source="comment" />
            <DateField source="date" />
          </Datagrid>
        </ReferenceManyField>
      </TabbedShowLayout.Tab>
    </TabbedShowLayout>
  </Show>
);
