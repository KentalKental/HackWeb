import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as formik from "formik";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Form1Props {
  nextStep: (data: any) => void;
  initialValues: any;
}

function Form1({ nextStep, initialValues }: Form1Props) {
  const { Formik } = formik;

  const schema = yup.object().shape({
    datepick: yup.date().required("Date is Required !"),
    username: yup
      .string()
      .min(6, "Username must be at least 6 characters long")
      .required("Username is Required !"),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is Required !"),
    password1: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
    password2: yup
      .string()
      .oneOf([yup.ref("password1")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => nextStep(values)}
      initialValues={initialValues}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        setFieldValue,
        setFieldTouched,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group as={Col} md="4" controlId="validationFormik01">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="text"
              placeholder="example@email.com"
              onChange={handleChange}
              value={values.email}
              isInvalid={touched.email && !!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {typeof errors.email === "string" ? errors.email : ""}
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
              Email is valid !
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationFormikUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={values.username}
                onChange={handleChange}
                isInvalid={touched.username && !!errors.username }
                isValid={touched.username && !errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {typeof errors.username === "string" ? errors.username : ""}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationFormik02">
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                name="password1"
                placeholder="Password"
                value={values.password1}
                onChange={handleChange}
                isInvalid={touched.password1 && !!errors.password1}
                isValid={touched.password1 && !errors.password1}
              />
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {typeof errors.password1 === "string" ? errors.password1 : ""}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationFormik02">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="password2"
              placeholder="Confirm Password"
              value={values.password2}
              onChange={handleChange}
              isInvalid={touched.password2 && !!errors.password2}
              isValid={touched.password2 && !errors.password2}
            />
            <Form.Control.Feedback type="invalid">
              {typeof errors.password2 === "string" ? errors.password2 : ""}
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationFormik04">
            <Form.Label>Birth Date</Form.Label>
            <DatePicker
              selected={values.datepick} // Bind to Formik values
              name="datepick"
              onChange={(date) => setFieldValue("datepick", date)} // Update Formik state
              onBlur={() => setFieldTouched("datepick", true)} // Mark as touched
              className={`form-control ${
                touched.datepick && errors.datepick ? "is-invalid" : ""
              }`} // Bootstrap styling
              dateFormat="yyyy-MM-dd" // Format date
              placeholderText="yyyy-mm-dd"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              minDate={new Date("1900-01-01")}
            />
          </Form.Group>
          
          <Button type="submit">Continue</Button>
        </Form>
      )}
    </Formik>
  );
}

export default Form1;
