import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Checkbox,
  Stack,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form"; // Import Controller
import type { SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { DevTool } from "@hookform/devtools";

interface SkillsForm {
  selectedSkills: string[];
  agreeToTerms: boolean;
}

const CheckboxFormExample1 = () => {
  const commonError = {
    color: "red",
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    control, // `control` is essential for `Controller`
    formState: { errors, isValid },
  } = useForm<SkillsForm>({
    defaultValues: {
      selectedSkills: [],
      agreeToTerms: false,
    },
  });

  const watchedSkills = watch("selectedSkills");
  const watchedTerms = watch("agreeToTerms");

  useEffect(() => {
    console.log("Current Selected Skills (watched):", watchedSkills);
    console.log("Agreed to Terms (watched):", watchedTerms);
  }, [watchedSkills, watchedTerms]);

  const onSubmit: SubmitHandler<SkillsForm> = (data) => {
    console.log("Form Submitted:", data);
    alert(`Selected Skills: ${data.selectedSkills.join(", ")}\nAgreed to Terms: ${data.agreeToTerms}`);
    reset();
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
            Checkbox Example
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={3}>
              {/* --- Multiple Checkboxes (Skills) using Controller --- */}
              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{ color: "black" }}>
                  <Typography variant="h6">Select Your Skills</Typography>
                </FormLabel>
                <FormGroup>
                  {/*
                    Using Controller for each checkbox in a group.
                    This handles the `checked` state correctly based on `field.value` (the array).
                  */}
                  {["HTML", "CSS", "JavaScript", "React"].map((skill) => (
                    <FormControlLabel
                      key={skill}
                      control={
                        <Controller
                          name="selectedSkills" // Name of the array field
                          control={control}
                          rules={{ required: "Please select at least one skill" }}
                          render={({ field }) => (
                            <Checkbox
                              {...field} // Provides name, onBlur, onChange, and ref
                              value={skill} // The specific value for this checkbox
                              checked={field.value.includes(skill)} // <-- Explicitly set checked
                              onChange={(e) => {
                                // Manual logic to add/remove from array
                                const current = field.value || [];
                                if (e.target.checked) {
                                  field.onChange([...current, skill]);
                                } else {
                                  field.onChange(current.filter((s: string) => s !== skill));
                                }
                              }}
                            />
                          )}
                        />
                      }
                      label={skill}
                    />
                  ))}
                </FormGroup>
                {errors.selectedSkills && (
                  <Typography sx={commonError} variant="body2">
                    {errors.selectedSkills?.message}
                  </Typography>
                )}
              </FormControl>

              {/* --- Single Checkbox (Agree to Terms) - Direct Register --- */}
              {/* Direct register works fine for single boolean checkboxes as `checked` prop is implicitly handled */}
              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{ color: "black" }}>
                  <Typography variant="h6">Terms & Conditions</Typography>
                </FormLabel>
                <FormControlLabel
                  control={
                    <Checkbox {...register("agreeToTerms", {
                      required: "You must agree to the terms."
                    })} />
                  }
                  label="I agree to the Terms and Conditions"
                />
                {errors.agreeToTerms && (
                  <Typography sx={commonError} variant="body2">
                    {errors.agreeToTerms?.message}
                  </Typography>
                )}
              </FormControl>

              {/* --- Action Buttons --- */}
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: 'wrap' }}>
                <Button variant="contained" type="submit" disabled={!isValid}>
                  Submit Form
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setValue("selectedSkills", ["HTML", "React"], {
                      shouldValidate: true,
                      shouldDirty: true,
                    });
                    console.log("Set skills to HTML and React");
                  }}
                >
                  Set HTML & React
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    reset({ selectedSkills: [] });
                    console.log("Cleared all skills");
                  }}
                >
                  Clear All Skills
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setValue("agreeToTerms", true, {
                      shouldValidate: true,
                      shouldDirty: true,
                    });
                    console.log("Agreed to terms");
                  }}
                >
                  Agree to Terms
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setValue("agreeToTerms", false, {
                      shouldValidate: true,
                      shouldDirty: true,
                    });
                    console.log("Disagreed to terms");
                  }}
                >
                  Disagree Terms
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

export default CheckboxFormExample1;