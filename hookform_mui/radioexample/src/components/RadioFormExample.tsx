import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useState, useEffect } from "react";

// Define a simple interface for our form data
interface GenderForm {
  gender: string;
}

const RadioFormExample = () => {
  const commonError = {
    color: "red",
  };

  // 1. Initialize useForm
  //    - `defaultValues` sets the initial state of the form.
  //      Here, `gender` is initially an empty string, meaning no radio is selected.
  const {
    register, // Function to register inputs with React Hook Form
    handleSubmit, // Function to handle form submission
    reset, // Function to reset form values programmatically
    setValue, // Function to set a specific field's value programmatically
    watch, // Function to watch form field values (for debugging/conditional rendering)
    control, // Object for DevTools and other controlled components
    formState: { errors, isValid }, // Object containing form state, including validation errors
  } = useForm<GenderForm>({
    defaultValues: {
      gender: "", // Initialize gender as empty, so no radio is checked by default
    },
  });

  // Optional: Watch the gender field to see its value change in console
  const watchedGender = watch("gender");
  useEffect(() => {
    console.log("Current Gender Value (watched):", watchedGender);
  }, [watchedGender]);

  // 2. Define the submit handler
  const onSubmit: SubmitHandler<GenderForm> = (data) => {
    console.log("Form Submitted:", data);
    alert(`Selected Gender: ${data.gender}`);
    reset(); // Reset the form after submission, which will uncheck the radio button
  };

  // Theme for MUI TextField width (optional, but good practice if using TextFields)
  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            width: "100%",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box component="section" sx={{ p: 2 }}>
        <Box
          component="div"
          sx={{
            width: { xs: "90%", sm: "70%", md: "50%", lg: "30%" },
            margin: "auto",
            py: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            p: 3,
            boxShadow: 3,
          }}
        >
          <Typography variant="h5" component="h1" gutterBottom align="center">
            Radio Button Example
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={3}>
              {/* --- Gender Selection --- */}
              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{ color: "black" }}>
                  <Typography variant="h6">Select Your Gender</Typography>
                </FormLabel>
                <RadioGroup row aria-label="gender" name="row-radio-buttons-group"
                value={watchedGender}
                onChange={(event)=>setValue("gender",event.target.value,{ shouldValidate: true, shouldDirty: true })}
                >
                  <FormControlLabel
                    value="male"
                    control={
                      // 3. Registering the Radio Button
                      //    - `register("gender")`: Links this radio to the `gender` field in form data.
                      //    - `value="male"`: This is the value that will be assigned to `gender` when this radio is selected.
                      //    - `{ required: "Gender is Required" }`: Validation rule.
                      <Radio value="male" {...register("gender", { required: "Gender is Required" })} />
                    }
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={
                      <Radio value="female" {...register("gender", { required: "Gender is Required" })} />
                    }
                    label="Female"
                  />
                  <FormControlLabel
                    value="non-binary"
                    control={
                      <Radio {...register("gender", { required: "Gender is Required" })} />
                    }
                    label="Non-Binary"
                  />
                </RadioGroup>
                {/* Display error message if gender is not selected */}
                {errors.gender && (
                  <Typography sx={commonError} variant="body2">
                    {errors.gender?.message}
                  </Typography>
                )}
              </FormControl>

              {/* --- Action Buttons --- */}
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                <Button variant="contained" type="submit" disabled={!isValid}>
                  Submit Form
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    // 4. Programmatically Check (Select) a Radio Button
                    //    - This sets the 'gender' field's value to 'female',
                    //      making the 'Female' radio checked.
                    setValue("gender", "female", {
                      shouldValidate: true, // Re-run validation after setting value
                      shouldDirty: true, // Mark form as dirty
                    });
                    console.log("Set gender to Female");
                  }}
                >
                  Set to Female
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    // 4. Programmatically Check (Select) a Radio Button
                    //    - This sets the 'gender' field's value to 'female',
                    //      making the 'Female' radio checked.
                    setValue("gender", "male", {
                      shouldValidate: true, // Re-run validation after setting value
                      shouldDirty: true, // Mark form as dirty
                    });
                    console.log("Set gender to Female");
                  }}
                >
                  Set to Male
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    // 5. Programmatically Uncheck All Radios
                    //    - Setting the value to an empty string (or any value not matching a radio's `value`)
                    //      will effectively uncheck all radios in the group.
                    reset({ gender: "" }); // Or setValue("gender", "");
                    console.log("Reset gender to empty");
                  }}
                >
                  Clear Selection
                </Button>
              </Box>
            </Stack>
          </Box>
          <DevTool control={control} /> {/* React Hook Form DevTools */}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default RadioFormExample;
