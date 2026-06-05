import { useFormWizardContext } from "../hook/useFormWizardContext";
import DeclarationForm from "./DeclarationForm";
import EducationForm from "./EducationForm";
import PersonalForm from "./PersonalForm";

const MainForm = () => {
  const { state, dispatch } = useFormWizardContext();
  const { activeStep } = state; // Extracts 1, 2, or 3

  // Calculate the progress bar width based on activeStep
  // Step 1 = 0%, Step 2 = 50%, Step 3 = 100%
  const progressWidth = `${((activeStep - 1) / 2) * 100}%`;

  const handleNext = () => {
    if (activeStep < 3) {
      dispatch({ type: "INCREMENT_ACTIVE_STEP" });
    }
  };
  const handlePrevious = () => {
    console.log(activeStep)
    if (activeStep > 1) {
      dispatch({ type: 'DECREMENT_ACTIVE_STEP' })
    }
  }

  return (
    <div style={styles.container}>
      {/* --- STEPPER VISUAL INDICATOR --- */}
      <div style={styles.stepperContainer}>
        <div style={styles.progressLineBackground}>
          <div style={{ ...styles.progressLineActive, width: progressWidth }} />
        </div>

        {/* Step 1 */}
        <div style={activeStep >= 1 ? styles.stepActive : styles.stepInactive}>
          1
        </div>

        {/* Step 2 */}
        <div style={activeStep >= 2 ? styles.stepActive : styles.stepInactive}>
          2
        </div>

        {/* Step 3 */}
        <div style={activeStep >= 3 ? styles.stepActive : styles.stepInactive}>
          3
        </div>
      </div>

      {/* --- FORM CONTENT --- */}
      <div style={styles.formContent}>
        <h3>Current Step: {activeStep}</h3>
        {/* You can conditionally render your subforms here based on activeStep */}
        {
          activeStep === 1 && (
            <PersonalForm />
          )
        }
        {
          activeStep === 2 && (
            <EducationForm />
          )
        }
        {
          activeStep === 3 && (
            <DeclarationForm />
          )
        }
      </div>

      {/* --- BUTTON TO INCREMENT --- */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={activeStep === 1}
          style={styles.button}
        >
          {activeStep === 1 ? "Start" : "Back"}
        </button>

        <button
          onClick={handleNext}
          disabled={activeStep === 3}
          style={styles.button}
        >
          {activeStep === 3 ? "Finished" : "Next Step"}
        </button>
      </div>
    </div>
  );
};

// Simple inline styles for demonstration
const styles = {
  container: {
    padding: "24px",
    fontFamily: "sans-serif",
    maxWidth: "500px",
    margin: "0 auto",
  },
  stepperContainer: {
    position: "relative" as const,
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "40px",
    // border: '2px solid',
  },
  progressLineBackground: {
    position: "absolute" as const,
    top: "50%",
    left: "0",
    right: "0",
    height: "4px",
    backgroundColor: "#e0e0e0",
    transform: "translateY(-50%)",
    zIndex: 1,
    // border: '1px solid red'
  },
  progressLineActive: {
    height: "100%",
    backgroundColor: "#007bff",
    transition: "width 0.7s ease", // Smooth transition when filling
  },
  stepActive: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    zIndex: 2,
    border: "4px solid #fff",
    transition: "background-color 0.4s ease",
  },
  stepInactive: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#e0e0e0",
    color: "#757575",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    zIndex: 2,
    border: "4px solid #fff",
    transition: "background-color 0.4s ease",
  },
  formContent: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center" as const,
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  }
};

export default MainForm;
