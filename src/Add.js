import axios from "axios";
import {Field, Form, Formik} from "formik";


export default function Add() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    action: '',
                    score: ''
                }}
                onSubmit={values => {
                    axios.post('http://localhost:3000/students', values).then(() => {
                        window.location.reload();
                    })
                }}
            >
                <Form>
                    name: <Field name={'name'}/>
                    description: <Field name={'description'}/>
                    action: <Field name={'action'}/>
                    score: <Field name={'score'}/>
                    <button>Save</button>
                </Form>
            </Formik>
        </>
    )
}