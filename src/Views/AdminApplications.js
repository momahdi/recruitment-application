import React, {useState} from "react"
import {Field, Form, Formik, useField} from "formik";
import {Button, Checkbox, FormControlLabel} from "@material-ui/core";
import * as Yup from "yup"
import ApplicationList from "./ApplicationList";

const AdminApplications = ({apiCall}) => {
    const [result, setResult] = useState([])
    const CustomCheckboxes = ({label, ...props}) => {
        const [field] = useField(props);
        return <FormControlLabel {...field} control={<Checkbox/>} label={label}/>;
    }


    return (
        <div>
            <Formik
                initialValues={{

                    competences: []

                }}
                onSubmit={(data, {setSubmitting}) => {
                    setSubmitting(true);

                    if (data.competences.length === 5) {
                        //handleTestGet();
                        apiCall.testGET().then(result => (console.log(result), setSubmitting(false), setResult(result)));
                    } else if (data.competences.length === 2) {

                        let param = "posts/competence/or=" + data.competences[0] + "&=" + data.competences[1];

                        apiCall.apiCallGet(param)
                            .then(response => (console.log(response), setSubmitting(false), setResult(response)))
                            .catch(error => console.log(error))


                    } else if (data.competences.length === 1) {
                        let param = "posts/competence=" + data.competences[0];

                        apiCall.apiCallGet(param)
                            .then(response => (console.log(response), setSubmitting(false), setResult(response)))
                            .catch(error => console.log(error))
                    }

                }}
            >
                {({values, isSubmitting, errors}) => (
                    <Form>
                        <CustomCheckboxes name="competences" value="A-skills" type="checkbox" label="A-skills"/>
                        <CustomCheckboxes name="competences" value="B-skills" type="checkbox" label="B-skills"/>
                        <CustomCheckboxes name="competences" value="C-skills" type="checkbox" label="C-skills"/>
                        <CustomCheckboxes name="competences" value="D-skills" type="checkbox" label="D-skills"/>
                        <CustomCheckboxes name="competences" value="E-skills" type="checkbox" label="E-skills"/>
                        <Button disabled={isSubmitting} type="submit">Get Applications</Button>
                        <div>
                            <pre>{JSON.stringify(values, null, 2)}</pre>
                            <pre>{JSON.stringify(errors, null, 2)}</pre>
                        </div>
                    </Form>

                )}
            </Formik>
            {(result.length > 0) ? <ApplicationList applications={result}/> : ""}
        </div>
    )
}

// <ApplicationList applications={apps}/>
export default AdminApplications;