import React, { useState } from "react";
import { Button, TextField, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

interface FormField {
  value: string;
  error: string;
}

const initialFieldState: FormField = {
  value: "",
  error: "",
};

const initialFormState: FormField[] = [initialFieldState];

const AddSingleField: React.FC<any> = ({ setState }: any) => {
  console.log(setState);

  const [formFields, setFormFields] = useState(initialFormState);

  const handleChange = (index: number, value: string) => {
    const newFormFields = [...formFields];
    newFormFields[index].value = value;
    setFormFields(newFormFields);
  };

  const handleAddField = () => {
    setFormFields([...formFields, { ...initialFieldState }]);
  };

  const handleRemoveField = (index: number) => {
    const newFormFields = [...formFields];
    newFormFields.splice(index, 1);
    setFormFields(newFormFields);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validation logic goes here
    console.log("Form submitted:", formFields);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {formFields.map((field, index) => (
          <React.Fragment key={index}>
            <Grid item xs={10}>
              <TextField
                label={"Value"}
                value={field.value}
                onChange={(e) => handleChange(index, e.target.value)}
                error={!!field.error}
                helperText={field.error}
                fullWidth
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton
                disabled={formFields.length === 1}
                onClick={() => handleRemoveField(index)}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={handleAddField} aria-label="add">
                <AddIcon />
              </IconButton>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </form>
  );
};

export default AddSingleField;
