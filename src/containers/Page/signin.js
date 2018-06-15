import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import SignInStyleWrapper from './signin.style';

class SignIn extends Component {
  state = {
    redirectToReferrer: false,
  };

  render() {
   
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
              signInTitle
              </Link>
            </div>

            <div className="isoSignInForm">
              <div className="isoInputWrapper">
                <Input size="large" placeholder="Username" />
              </div>

              <div className="isoInputWrapper">
                <Input size="large" type="password" placeholder="Password" />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>
                RememberMe
                </Checkbox>
                <Button type="primary" >
                SignIn
                </Button>
              </div>

              <p className="isoHelperText">
              signInPreview
              </p>

              <div className="isoCenterComponent isoHelperWrapper">
                <Link to="/forgotpassword" className="isoForgotPass">
                ForgotPassword
                </Link>
               
              </div>
            </div>
          </div>
        </div>
        </SignInStyleWrapper>
    );
  }
}

export default SignIn
