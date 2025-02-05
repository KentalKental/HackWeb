import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as formik from "formik";
import * as yup from "yup";

interface Form2Props {
    submitForm: (data: any) => void;
    initialValues: any;
    setFormData: (data:any)=>void
  }

function Form2({submitForm ,initialValues}: Form2Props){
    const {Formik} = formik;

    const schema = yup.object().shape({

    })

    return(
        <Formik
        validationSchema={schema}
        onSubmit={()=>submitForm(initialValues)}
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
            })=> (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group as={Col} md="4" controlId="valForm01">
                        <Form.Label>Interested Themes(s)</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type=""
                            />
                        </InputGroup>
                    </Form.Group>

                </Form>
            )

            }


        </Formik>

    );
}

export default Form2;