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

const RadioFormExample1 = () => {
  const commonError = {
    color: "red",
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch, // <-- Keep watch to get the current form value
    control,
    formState: { errors, isValid },
  } = useForm<GenderForm>({
    defaultValues: {
      gender: "",
    },
  });

  // Watch the gender field for the RadioGroup's value prop
  const currentGenderValue = watch("gender");

  useEffect(() => {
    console.log("Current Gender Value (watched):", currentGenderValue);
  }, [currentGenderValue]);

  const onSubmit: SubmitHandler<GenderForm> = (data) => {
    console.log("Form Submitted:", data);
    alert(`Selected Gender: ${data.gender}`);
    reset(); // Reset the form after submission, which will uncheck the radio button
  };

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
                {/*
                  CRITICAL FIX:
                  The `RadioGroup` itself needs its `value` prop to be tied to the form's state.
                  When `setValue` or `reset` changes the 'gender' field, `watch('gender')`
                  will update `currentGenderValue`, which then correctly updates the RadioGroup,
                  causing the corresponding child Radio to be checked.
                */}
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                  value={currentGenderValue} // <-- THIS IS THE KEY FIX
                  onChange={(event) => setValue("gender", event.target.value, { shouldValidate: true, shouldDirty: true })} // <-- ALSO IMPORTANT: Manual onChange to update RHF
                >
                  <FormControlLabel
                    value="male"
                    control={
                      <Radio {...register("gender", { required: "Gender is Required" })} />
                    }
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={
                      <Radio {...register("gender", { required: "Gender is Required" })} />
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
                    setValue("gender", "female", {
                      shouldValidate: true,
                      shouldDirty: true,
                    });
                    console.log("Set gender to Female");
                  }}
                >
                  Set to Female
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    reset({ gender: "" }); // Or setValue("gender", "");
                    console.log("Reset gender to empty");
                  }}
                >
                  Clear Selection
                </Button>
              </Box>
            </Stack>
          </Box>
          <DevTool control={control} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default RadioFormExample1;