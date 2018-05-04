// Render Prop
import React from 'react'
import { withFormik, Form, Field } from 'formik'
import Yup from 'yup'
import { Grid, Col, Row} from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';



const FormikBasic = ({
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    person
}) => (
    <Grid>
    <Row className="show-grid">
    <Col md={5}>
    <Form className="form" onSubmit={handleSubmit}>
        <Row>
        <Col md={8} mdOffset={4}>
        <label htmlFor="email">Email</label>
        </Col>
        <Col md={8} mdOffset={4}>
        <input id="email" type="text" onChange={handleChange} onBlur={handleBlur} className={errors.email && touched.email ? ('error'):('text-input')}/>
        {touched.email && errors.email ?(<p style={{color:"red"}}>{errors.email}</p>):(<p></p>) }
        </Col>
        </Row>
        <Row>
        <Col md={8} mdOffset={4}>
        <label>Password</label>
        </Col>
        <Col md={8} mdOffset={4}>
        <input id="password" type="password" onChange={handleChange} onBlur={handleBlur} className={errors.password && touched.password ? ('error'):('text-input')}/>
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
         <button type="submit" disabled={isSubmitting}>Submit</button>
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
         setTimeout(()=>{
            axios.get(`http://localhost:3001/person`)
                .then(res => {
                    if(res.data[0]){
                        const { name } = res.data[0];
                        console.log(props.person.username);
                    }
            })

            if(values.email==='andrew@test.io'){
                setErrors({ email:'That email is already taken'})
            }else {
                resetForm()
            }
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