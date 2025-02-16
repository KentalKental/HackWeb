import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as formik from "formik";
import * as yup from "yup";
import { Form as BootstrapForm, Container } from "react-bootstrap";
import Select from "react-select";
import countryList from "react-select-country-list";

interface Form2Props {
  submitForm: (data: any) => void;
  initialValues: any;
  setStep: any;
}

function Form2({ submitForm, initialValues, setStep }: Form2Props) {
  const { Formik } = formik;

  const themeOptions = [
    { value: "data-science", label: "Data Science" },
    { value: "beginner-friendly", label: "Beginner Friendly" },
    { value: "iot", label: "IoT" },
    { value: "web-development", label: "Web Development" },
  ];

  const cities = countryList().getData();

  const schema = yup.object().shape({
    theme: yup
      .array()
      .min(1, "Select at least one theme")
      .required("Pick at least 1 theme that suits you"),
    city: yup.string().required("Pick your country of origin"),
    level: yup.string().required("Pick your level"),
    regulation: yup
      .boolean()
      .oneOf([true], "You must accept the terms & condition"),
  });

  const levels = [
    { value: "professional", label: "Professional" },
    { value: "university", label: "University" },
    { value: "high-school", label: "High School" },
  ];

  return (
    <Container
      className="p-4 shadow rounded bg-light"
      style={{ maxWidth: "500px" }}
    >
      <Button onClick={() => setStep(1)}>Back</Button>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          console.log("Test ", values);
          submitForm(values);
        }}
        initialValues={initialValues}
      >
        {({ handleSubmit, values, touched, errors, setFieldValue }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <BootstrapForm.Group className="mb-3">
              <Form.Label className="fw-bold">Interested Theme(s)</Form.Label>
              <Select
                options={themeOptions}
                value={themeOptions.filter((option) =>
                  values.theme.includes(option.value)
                )}
                name="theme"
                onChange={(selected) => {
                  setFieldValue(
                    "theme",
                    selected ? selected.map((item) => item.value) : []
                  );
                }}
                isMulti={true}
                isClearable={true}
                className={
                  touched.theme && errors.theme ? "is-invalid" : "valid"
                }
              />
              {touched.theme && errors.theme && (
                <div className="text-danger">
                  {Array.isArray(errors.theme)
                    ? errors.theme.join(", ")
                    : String(errors.theme)}
                </div>
              )}
            </BootstrapForm.Group>
            <BootstrapForm.Group className="mb-3">
              <Form.Label className="fw-bold">Country</Form.Label>
              <Select
                options={cities}
                value={cities.find((c) => c.value === values.city)} // Match selected value
                name="city"
                onChange={(city) => setFieldValue("city", city!.value)} // Store only `value`
                className={touched.city && errors.city ? "is-invalid" : "valid"}
              />
            </BootstrapForm.Group>

            {touched.city && errors.city && (
              <div className="text-danger">{String(errors.city)}</div>
            )}
            <BootstrapForm.Group className="mb-3">
              <Form.Label className="fw-bold">User Level</Form.Label>
              <Select
                options={levels}
                value={levels.find((l) => l.value === values.level)}
                name="level"
                onChange={(level) => setFieldValue("level", level!.value)}
              />
            </BootstrapForm.Group>
            {touched.level && errors.level && (
              <div className="text-danger">{String(errors.level)}</div>
            )}
            <Form.Check
              type="checkbox"
              value={values.regulation}
              label="Agree to our terms & conditions."
              name="regulation"
              onChange={(reg) =>
                setFieldValue("regulation", reg.target.checked)
              }
            />
            {touched.regulation && errors.regulation && (
              <div className="text-danger">{String(errors.regulation)}</div>
            )}
            <Form.Check
              type="checkbox"
              value={values.subscribe}
              name="subscribe"
              onChange={(ch) => setFieldValue("subscribe", ch.target.checked)}
              label="Receive updates via Email."
            />

            <div className="text-center mt-3">
              <Button type="submit" variant="primary" className="w-100">
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Form2;
