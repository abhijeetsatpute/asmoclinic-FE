import React, { useState } from "react";
import { Button, TextField, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import useDocFormStore from "../../../store/docForm";

interface FormField {
  year: string;
  value: string;
}

const initialFieldState: FormField = {
  year: "",
  value: "",
};

const initialFormState: FormField[] = [initialFieldState];

const Educations: React.FC = () => {
  const setEducation = useDocFormStore((state: any) => state.setEducation);

  const [formFields, setFormFields] = useState(initialFormState);

  const handleChange = (
    index: number,
    field: keyof FormField,
    value: string
  ) => {
    const newFormFields = [...formFields];
    newFormFields[index][field] = value;
    setFormFields(newFormFields);
    setEducation(newFormFields);
  };

  const handleAddField = () => {
    setFormFields([...formFields, { ...initialFieldState }]);
    setEducation([...formFields, { ...initialFieldState }]);
  };

  const handleRemoveField = (index: number) => {
    const newFormFields = [...formFields];
    newFormFields.splice(index, 1);
    setFormFields(newFormFields);
    setEducation(newFormFields);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        {formFields.map((field, index) => (
          <TextField
            sx={{
              marginBottom: "6px",
            }}
            key={index}
            label={`Year`}
            value={field.year}
            onChange={(e) => handleChange(index, "year", e.target.value)}
            fullWidth
          />
        ))}
      </Grid>
      <Grid item xs={7}>
        {formFields.map((field, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item xs={11}>
              <TextField
                sx={{
                  marginBottom: "6px",
                }}
                label={`Value`}
                value={field.value}
                onChange={(e) => handleChange(index, "value", e.target.value)}
                // error={!!field.error}
                // helperText={field.error}
                fullWidth
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton
                disabled={formFields.length < 2}
                onClick={() => handleRemoveField(index)}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={handleAddField} aria-label="add">
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Educations;
