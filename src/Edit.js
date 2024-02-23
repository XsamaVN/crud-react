import axios from "axios";
import { Field, Form, Formik } from "formik";

export default function Edit({ item }) {
    return (
        <>
            <Formik
                initialValues={{
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    action: item.action,
                    score: item.score
                }}
                onSubmit={(values) => {
                    axios.put(`http://localhost:3000/students/${values.id}`, values).then(() => {
                        alert("sửa thành công")
                        window.location.reload();
                    });
                }}
            >
                <Form>
                    name: <Field name="name" />
                    description: <Field name="description" />
                    action: <Field name="action" />
                    score: <Field name="score" />
                    <button type="submit">Save</button>
                </Form>
            </Formik>
        </>
    );
}
