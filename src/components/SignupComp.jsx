import React from 'react'
import { Formik, Field, Form } from "formik";
import ReactCurvedText from 'react-curved-text';
import './loginstyle.css'
import { 
  BrowserRouter, Routes, Route, useNavigate 
} from "react-router-dom";


export default function SignupComp() {

  const navigate = useNavigate();

    
  const redirectToHome = () => {
    navigate('/home'); 
  };

  return (
    <div className='login'>
         <h1><ReactCurvedText width='384'
          height='117'
          cx='100'
          cy='76'
          rx='175'
          ry='31'
          startOffset='85'
          reversed={true}
          text='Streamio'
          textProps={{"style": {"fontSize": "60"}}}
          textPathProps={{ "fill": "#FF0000"}}
          tspanProps={null}
          ellipseProps={{ "fill": "none", "stroke": "none" }}
          svgProps={null} /></h1>
      <div className='Image'>
     
        <img alt='img'
        src='https://gtwallpaper.org/sites/default/files/wallpaper/246844/netflix-background-246844-2224740-3441109.png'/>

      </div>

      <div className='form'>
        <h2>Sign Up</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          // await new Promise((resolve) => setTimeout(resolve, 500));
          // alert(JSON.stringify(values, null, 2));
          redirectToHome();
        }}
      >
        <Form className='container'>
          <Field name="email" type="email"  className="input-field"  placeholder='Email'/>
          <Field name="password" type="password"  className="input-field"  placeholder='password'/>
          <Field name="password" type="password"  className="input-field"  placeholder='confirm password'/>
          <button type="submit" className='sbtn' >Sign Up</button>
          
          <div className='signupcontainer'>
            <p>Already Have an Accout? </p>
            <a href='./'>Log In</a>
          </div>
          

        </Form>
      </Formik>
        
      </div>
    </div>
  )
}
