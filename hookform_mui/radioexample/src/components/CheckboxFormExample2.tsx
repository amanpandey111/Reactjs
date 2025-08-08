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
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { DevTool } from "@hookform/devtools";

interface SkillsForm {
  selectedSkills: string[]; // This will hold an array of strings
  agreeToTerms: boolean; // For a single checkbox example
}

const CheckboxFormExample2 = () => {
  const commonError = {
    color: "red",
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch, // Still essential to watch the array state
    control, // Still needed for DevTool
    formState: { errors, isValid },
  } = useForm<SkillsForm>({
    defaultValues: {
      selectedSkills: [], // IMPORTANT: Initialize with an empty array
      agreeToTerms: false, // Initialize single checkbox as unchecked
    },
  });

  // Watch the selectedSkills array. This is crucial for updating the `checked` prop.
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

  // Helper function to determine if a checkbox should be checked
  // This is what replaces Controller's internal logic for the `checked` prop
  const isChecked = (skillValue: string) => {
    return watchedSkills.includes(skillValue);
  };

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
            Checkbox Example (Without Controller)
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={3}>
              {/* --- Multiple Checkboxes (Skills) - Manual Wiring --- */}
              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{ color: "black" }}>
                  <Typography variant="h6">Select Your Skills</Typography>
                </FormLabel>
                <FormGroup>
                  { ["HTML", "CSS", "JavaScript", "React"].map((skill) => (
                    <FormControlLabel
                      key={skill}
                      control={
                        <Checkbox
                          // 1. Register the checkbox with the array name
                          {...register("selectedSkills", {
                            required: "Please select at least one skill",
                          })}
                          // 2. Assign its specific value
                          value={skill}
                          // 3. CRITICAL: Manually set the `checked` prop based on `watchedSkills`
                          checked={isChecked(skill)}
                          // 4. CRITICAL: Manual onChange to update the array
                          onChange={(e) => {
                            const currentSkills = watchedSkills || []; // Ensure it's an array
                            let newSkills;
                            if (e.target.checked) {
                              newSkills = [...currentSkills, skill];
                            } else {
                              newSkills = currentSkills.filter((s) => s !== skill);
                            }
                            // Update React Hook Form's state using setValue
                            setValue("selectedSkills", newSkills, {
                              shouldValidate: true,
                              shouldDirty: true,
                            });
                          }}
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

              {/* --- Single Checkbox (Agree to Terms) - Direct Register (still works fine) --- */}
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

              {/* --- Action Buttons (Same as before) --- */}
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

export default CheckboxFormExample2;