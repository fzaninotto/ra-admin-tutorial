import {
  Datagrid,
  DateField,
  Edit,
  NumberField,
  NumberInput,
  ReferenceField,
  ReferenceInput,
  ReferenceManyCount,
  ReferenceManyField,
  TabbedForm,
  TextField,
  TextInput,
} from "react-admin";

export const ProductEdit = () => (
  <Edit>
    <TabbedForm>
      <TabbedForm.Tab label="Main">
        <TextInput source="reference" />
        <TextInput source="thumbnail" fullWidth />
        <NumberInput source="price" />
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Metadata">
        <TextInput source="description" fullWidth multiline />
        <ReferenceInput source="category_id" reference="categories" />
        <NumberInput source="width" />
        <NumberInput source="height" />
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Stats">
        <NumberInput source="stock" />
        <NumberInput source="sales" />
      </TabbedForm.Tab>
      <TabbedForm.Tab
        label="Reviews"
        count={<ReferenceManyCount target="product_id" reference="reviews" />}
      >
        <ReferenceManyField target="product_id" reference="reviews">
          <Datagrid rowClick="edit">
            <ReferenceField source="customer_id" reference="customers" />
            <NumberField source="rating" />
            <TextField source="comment" />
            <DateField source="date" />
          </Datagrid>
        </ReferenceManyField>
      </TabbedForm.Tab>
    </TabbedForm>
  </Edit>
);
