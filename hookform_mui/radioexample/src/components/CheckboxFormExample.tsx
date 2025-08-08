// import {
//   Box,
//   Button,
//   FormControl,
//   FormControlLabel,
//   FormGroup, // Used for grouping checkboxes
//   FormLabel,
//   Checkbox,
//   Stack,
//   Typography,
//   createTheme,
//   ThemeProvider,
// } from "@mui/material";
// import { useForm } from "react-hook-form";
// import type { SubmitHandler } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
// import { useEffect } from "react";

// // Define a simple interface for our form data
// interface SkillsForm {
//   selectedSkills: string[]; // This will hold an array of strings, e.g., ["HTML", "React"]
//   agreeToTerms: boolean; // For a single checkbox example
// }

// const CheckboxFormExample = () => {
//   const commonError = {
//     color: "red",
//   };

//   // 1. Initialize useForm
//   const {
//     register,
//     handleSubmit,
//     reset,
//     setValue,
//     watch, // To watch the current values and update UI dynamically
//     control,
//     formState: { errors, isValid },
//   } = useForm<SkillsForm>({
//     defaultValues: {
//       selectedSkills: [], // IMPORTANT: Initialize with an empty array for multiple checkboxes
//       agreeToTerms: false, // Initialize single checkbox as unchecked
//     },
//   });

//   // Watch the selectedSkills array and agreeToTerms boolean for debugging
//   const watchedSkills = watch("selectedSkills");
//   const watchedTerms = watch("agreeToTerms");

//   useEffect(() => {
//     console.log("Current Selected Skills (watched):", watchedSkills);
//     console.log("Agreed to Terms (watched):", watchedTerms);
//   }, [watchedSkills, watchedTerms]);

//   // 2. Define the submit handler
//   const onSubmit: SubmitHandler<SkillsForm> = (data) => {
//     console.log("Form Submitted:", data);
//     alert(`Selected Skills: ${data.selectedSkills.join(", ")}\nAgreed to Terms: ${data.agreeToTerms}`);
//     reset(); // Reset the form after submission
//   };

//   // Theme for MUI (optional)
//   const theme = createTheme({
//     components: {
//       MuiTextField: {
//         styleOverrides: {
//           root: {
//             width: "100%",
//           },
//         },
//       },
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <Box component="section" sx={{ p: 2 }}>
//         <Box
//           component="div"
//           sx={{
//             width: { xs: "90%", sm: "70%", md: "50%", lg: "30%" },
//             margin: "auto",
//             py: "1rem",
//             border: "1px solid #ccc",
//             borderRadius: "8px",
//             p: 3,
//             boxShadow: 3,
//           }}
//         >
//           <Typography variant="h5" component="h1" gutterBottom align="center">
//             Checkbox Example
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
//             <Stack spacing={3}>
//               {/* --- Multiple Checkboxes (Skills) --- */}
//               <FormControl component="fieldset">
//                 <FormLabel component="legend" sx={{ color: "black" }}>
//                   <Typography variant="h6">Select Your Skills</Typography>
//                 </FormLabel>
//                 <FormGroup
                
//                 >
//                   {/*
//                     3. Registering Multiple Checkboxes:
//                     - All checkboxes use the same name: "selectedSkills".
//                     - Each has a unique `value` prop (e.g., "HTML", "CSS").
//                     - RHF automatically manages the `selectedSkills` array based on clicks.
//                   */}
//                   <FormControlLabel
//                     control={<Checkbox {...register("selectedSkills", {
//                       required: "Please select at least one skill"
//                     })} value="HTML" />}
//                     label="HTML"
//                   />
//                   <FormControlLabel
//                     control={<Checkbox {...register("selectedSkills", {
//                       required: "Please select at least one skill"
//                     })} value="CSS" />}
//                     label="CSS"
//                   />
//                   <FormControlLabel
//                     control={<Checkbox {...register("selectedSkills", {
//                       required: "Please select at least one skill"
//                     })} value="JavaScript" />}
//                     label="JavaScript"
//                   />
//                   <FormControlLabel
//                     control={<Checkbox {...register("selectedSkills", {
//                       required: "Please select at least one skill"
//                     })} value="React" />}
//                     label="React"
//                   />
//                 </FormGroup>
//                 {/* Display error message */}
//                 {errors.selectedSkills && (
//                   <Typography sx={commonError} variant="body2">
//                     {errors.selectedSkills?.message}
//                   </Typography>
//                 )}
//               </FormControl>

//               {/* --- Single Checkbox (Agree to Terms) --- */}
//               <FormControl component="fieldset">
//                 <FormLabel component="legend" sx={{ color: "black" }}>
//                   <Typography variant="h6">Terms & Conditions</Typography>
//                 </FormLabel>
//                 <FormControlLabel
//                   control={
//                     // Registering a single checkbox, typically boolean
//                     <Checkbox {...register("agreeToTerms", {
//                       required: "You must agree to the terms."
//                     })} />
//                   }
//                   label="I agree to the Terms and Conditions"
//                 />
//                 {errors.agreeToTerms && (
//                   <Typography sx={commonError} variant="body2">
//                     {errors.agreeToTerms?.message}
//                   </Typography>
//                 )}
//               </FormControl>

//               {/* --- Action Buttons --- */}
//               <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: 'wrap' }}>
//                 <Button variant="contained" type="submit" disabled={!isValid}>
//                   Submit Form
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   onClick={() => {
//                     // 4. Programmatically Check specific checkboxes:
//                     //    - Pass an array of `value` strings to `setValue`.
//                     //    - Any checkbox whose `value` is in the array will be checked.
//                     //    - Others will be unchecked.
//                     setValue("selectedSkills", ["HTML", "React"], {
//                       shouldValidate: true,
//                       shouldDirty: true,
//                     });
//                     console.log("Set skills to HTML and React");
//                   }}
//                 >
//                   Set HTML & React
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   onClick={() => {
//                     // 5. Programmatically Uncheck All (for multiple checkboxes):
//                     //    - Set the value to an empty array `[]`.
//                     //    - This will clear all selections.
//                     reset({ selectedSkills: [] }); // Or setValue("selectedSkills", []);
//                     console.log("Cleared all skills");
//                   }}
//                 >
//                   Clear All Skills
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   onClick={() => {
//                     // Programmatically Check Single Checkbox: set to true
//                     setValue("agreeToTerms", true, {
//                       shouldValidate: true,
//                       shouldDirty: true,
//                     });
//                     console.log("Agreed to terms");
//                   }}
//                 >
//                   Agree to Terms
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   onClick={() => {
//                     // Programmatically Uncheck Single Checkbox: set to false
//                     setValue("agreeToTerms", false, {
//                       shouldValidate: true,
//                       shouldDirty: true,
//                     });
//                     console.log("Disagreed to terms");
//                   }}
//                 >
//                   Disagree Terms
//                 </Button>
//               </Box>
//             </Stack>
//           </Box>
//           <DevTool control={control} /> {/* React Hook Form DevTools */}
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default CheckboxFormExample;
