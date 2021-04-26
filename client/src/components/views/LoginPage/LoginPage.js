import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../_actions/user_actions";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
import { useDispatch } from "react-redux";

const { Title } = Typography;

function LoginPage(props) {
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState('')
  const [rememberMe, setRememberMe] = useState(rememberMeChecked)

  const handleRememberMe = () => {
    setRememberMe(!rememberMe)
  };

  const goRegisterPage = () => {
    props.history.push('/register')
  };

  const initialEmail = localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : '';

  return (
    <div>
    
    <Formik
      initialValues={{
        email: initialEmail,
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password
          };

          dispatch(loginUser(dataToSubmit))
            .then(response => {
              if (response.payload.loginSuccess) {
                window.localStorage.setItem('userId', response.payload.userId);
                if (rememberMe === true) {
                  window.localStorage.setItem('rememberMe', values.id);
                } else {
                  localStorage.removeItem('rememberMe');
                }
                props.history.push("/");
              } else {
                setFormErrorMessage('Check out your Account or Password again')
              }
            })
            .catch(err => {
              setFormErrorMessage('Check out your Account or Password again')
              setTimeout(() => {
                setFormErrorMessage("")
              }, 3000);
            });
          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="app" style={{ display: 'flex', alignItems: 'center', marginTop: '5rem', flexDirection: 'row'}}>
            <div style={{ width: '65rem' }}>
              <img style={{ width: '50rem', marginLeft: '3rem' }} src={`http://localhost:5000/uploads/loginimage.jpg`} />
            </div>
            
            <div style={{ marginRight: '3rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'inline-block', width: '350px', marginTop: '1rem' }}>
              <Form.Item required>
                <Input
                  id="email" bordered= "false"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="EMAIL"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </Form.Item>

              <Form.Item required>
                <Input
                  id="password"
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="PASSWORD"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              {formErrorMessage && (
                <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>
              )}

              <Form.Item>
                <Checkbox id="rememberMe" onChange={handleRememberMe} checked={rememberMe} style={{ color: '#C8C8C7' }}>Remember me</Checkbox>
                <a className="login-form-forgot" href="/reset_user" style={{ float: 'right' , color:'#C8C8C7' }}>
                  Forgot password?
                </a>
                <div>
                  {/* <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%', border:'3px solid #02343F' }} disabled={isSubmitting} onSubmit={handleSubmit}>
                    SIGN IN
                  </Button> */}
                  <button htmlType="submit" style={{ minWidth: '100%', border:'1px solid #707070', color: '#C8C8C7', backgroundColor: '#0E1106' }} disabled={isSubmitting} onSubmit={handleSubmit}>
                    SIGN IN
                  </button>
                </div>
                
                <div style={{ marginTop: '1rem', color: '#C8C8C7', textAlign: 'center' }}>
                If you don't have a membership
                </div> 
                <button type="button" style={{ minWidth: '100%', border:'1px solid #707070', color: '#C8C8C7', backgroundColor: '#0E1106' }} onClick={goRegisterPage} >
                    REGISTER
                </button>
                
                {/* <a href="/register" style={{ color:'#02343F', fontWeight:'bold'}}>register now!</a> */}
                            
                </Form.Item>
            </form>
            </div>

          </div>
        );
      }}
    </Formik>
    </div>
  );
};

export default withRouter(LoginPage);


