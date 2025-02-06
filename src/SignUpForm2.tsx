import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as formik from "formik";
import * as yup from "yup";

interface Form2Props {
  submitForm: (data: any) => void;
  initialValues: any;
}

function Form2({ submitForm, initialValues }: Form2Props) {
  const { Formik } = formik;

  const themeOptions = [
    "Data Science",
    "Beginner Friendly",
    "IoT",
    "Web Development",
  ];

  const schema = yup.object().shape({});

  return (
    <Formik
      validationSchema={schema}
      onSubmit={() => submitForm(initialValues)}
      initialValues={initialValues}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        setFieldTouched,
        setFieldValue,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group as={Col} md="4" controlId="valForm01">
            <Form.Label>Interested Themes(s)</Form.Label>
            <Form.Control
              as={"select"}
              multiple
              name="theme"
              value={values.themes}
              onChange={(e) =>
                setFieldValue(
                  "theme",
                  [...(e.target as unknown as HTMLSelectElement).selectedOptions].map(
                    (option) => option.value
                  )
                )
              }
              isInvalid={touched.themes && !!errors.themes}
            >
              {themeOptions.map((theme) => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
}

export default Form2;
