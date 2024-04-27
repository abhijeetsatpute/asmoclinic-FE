import React, { useState } from "react";
import { Button, Grid, IconButton, MenuItem, Select } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import useDocFormStore from "../../../store/docForm";

interface FormField {
  label: string;
  value: string;
}

const initialFieldState: FormField = {
  label: "",
  value: "",
};

const initialFormState: FormField[] = [initialFieldState];

const AddMultiSelect: React.FC = () => {
  const [formFields, setFormFields] = useState(initialFormState);

  const handleChange = (
    index: number,
    field: keyof FormField,
    value: string
  ) => {
    const newFormFields = [...formFields];
    newFormFields[index][field] = value;
    setFormFields(newFormFields);
    // setLanguage(formFields);
  };

  const handleAddField = () => {
    setFormFields([...formFields, { ...initialFieldState }]);
  };

  const handleRemoveField = (index: number) => {
    const newFormFields = [...formFields];
    newFormFields.splice(index, 1);
    setFormFields(newFormFields);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        {formFields.map((field, index) => (
          <Select
            sx={{
              marginBottom: "6px",
            }}
            label="Language"
            key={index}
            value={field.label}
            onChange={(e) => handleChange(index, "label", e.target.value)}
            fullWidth
          >
            <MenuItem value="Uzbek">Uzbek </MenuItem>
            <MenuItem value="Russian">Russian </MenuItem>
            <MenuItem value="English">English </MenuItem>
            <MenuItem value="Spanish">Spanish </MenuItem>
            <MenuItem value="Turkish">Turkish </MenuItem>
            {/* Add more options as needed */}
          </Select>
        ))}
      </Grid>
      <Grid item xs={7}>
        {formFields.map((field, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item xs={11}>
              <Select
                sx={{
                  marginBottom: "6px",
                }}
                label="Proficiency"
                value={field.value}
                onChange={(e) => handleChange(index, "value", e.target.value)}
                fullWidth
              >
                <MenuItem value="native language">native language</MenuItem>
                <MenuItem value="fluent">fluent</MenuItem>
                <MenuItem value="intermediate">intermediate</MenuItem>
                <MenuItem value="with dictionary">with dictionary</MenuItem>
                {/* Add more options as needed */}
              </Select>
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

export default AddMultiSelect;
