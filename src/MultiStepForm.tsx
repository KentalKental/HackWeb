import { useState } from "react";
import Form1 from "./SignUpForm1";
import Form2 from "./SignUpForm2";

function MultiStepForm() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password1: "",
    password2: "",
    datepick: null as Date | null,
    theme: [] as string[],
    city: "",
    level: "",
    regulation: false,
    subscribe: false,
  });

  const [step, setStep] = useState(2);

  const nextStep = (data: {
    email: string;
    username: string;
    password1: string;
    password2: string;
    datepick: Date | null;
    theme: string[];
    level: string;
    regulation: boolean;
    subscribe: boolean;
  }) => {
    console.log("Next step data :", data);
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep(2);
  };

  const submitForm = (val: {
    email: string;
    username: string;
    password1: string;
    password2: string;
    datepick: Date | null;
    theme: string[];
    level: string;
    regulation: boolean;
    subscribe: boolean;
  }) => {
    setFormData((prevData) => ({ ...prevData, ...val }));
    console.log("Submitting :", val); // Log the val directly
    //submit to backend
  };

  return (
    <div className="signUpContainer">
      {step === 1 && (
        <Form1 nextStep={nextStep} initialValues={formData}></Form1>
      )}
      {step === 2 && (
        <Form2 submitForm={submitForm} initialValues={formData} setStep={setStep}></Form2>
      )}
    </div>
  );
}

export default MultiStepForm;