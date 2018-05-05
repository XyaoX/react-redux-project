// Render Prop
import React from 'react'
import { withFormik, Form, Field } from 'formik'
import Yup from 'yup'
import { Grid, Col, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import {loginSuccessAction, loginFailAction} from './action/login';


const FormikBasic = ({
    values,
    errors,
    touched,
    isSubmitting,
    person
}) => (
    <Grid>
    <Row className="show-grid">
    <Col md={5}>
    <Form className="form">
        <Row>
        <Col md={8} mdOffset={4}>
        <label htmlFor="email">Email</label>
        </Col>
        <Col md={8} mdOffset={4}>
        <Field type="email" name="email"className={errors.email && touched.email ? ('error'):('text-input')}></Field>
        {touched.email && errors.email ?(<p style={{color:"red"}}>{errors.email}</p>):(<p></p>) }
        </Col>
        </Row>
        <Row>
        <Col md={8} mdOffset={4}>
        <label>Password</label>
        </Col>
        <Col md={8} mdOffset={4}>
        <Field type="password" name="password" className={errors.password && touched.password ? ('error'):('text-input')}></Field>
         {touched.password && errors.password ? (<p style={{color:"red"}}>{errors.password}</p>):(<p style={{display:'block'}}></p>) }
         </Col>
         </Row>
         <Row style={{marginTop:20}}>
        <Col md={4}>
        <label>
        <Field type="checkbox" name="newsletter" checked={values.newsletter}/>
        Remember me
        </label>
        </Col>
        <Col md={4} mdOffset={4}>
         <Button bsStyle="primary" type="submit" disabled={isSubmitting}>Submit</Button>
         </Col>
        </Row>
    </Form>
    </Col>
    </Row>
    </Grid>


 )
 
 const LoginForm = withFormik({
     mapPropsToValues({email, password, newsletter}) {
         return {
             email:email || '',
             password: password || '',
             newsletter:newsletter || false
         }
     },
     validationSchema: Yup.object().shape({
        email:Yup.string().email('Invalid Email Address').required('Email field is required'),
        password:Yup.string().min(9,'Password must be more than 9 characters').required('Password field is required')
     }),
     handleSubmit (values, {resetForm, setErrors, setSubmitting,props}) {
         let {email,password} = values;
         setTimeout(()=>{
            axios.post(`http://localhost:3001/auth`,{email,password})
                .then(res => {
                    if(res.status===200){
                        props.dispatch(loginSuccessAction(res.data));
                        resetForm()
                    }
            })
                .catch(err=> {
                    setErrors({email: err.response.data});
                    props.dispatch(loginFailAction());
                })
            setSubmitting(false)
         },1000)
     }
 })(FormikBasic)


 const mapStateToProps = (state) => {
     return {
         person:state.login.person
     }
 }



 export default connect(mapStateToProps)(LoginForm);