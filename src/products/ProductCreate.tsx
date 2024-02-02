import {
  Create,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ProductCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="reference" />
      <TextInput source="thumbnail" fullWidth />
      <NumberInput source="price" />
      <TextInput source="description" fullWidth multiline />
      <ReferenceInput source="category_id" reference="categories" />
      <NumberInput source="width" />
      <NumberInput source="height" />
      <NumberInput source="stock" />
    </SimpleForm>
  </Create>
);
