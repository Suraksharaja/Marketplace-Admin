import * as React from 'react';
export default class extends React.Component {
  render() {
    return (
        <div className="ForgotPasswordStyleWrapper"> 
          <div className="isoLoginContentWrapper">
            <div className="isoLoginContent">
              
              <div className="isoFormHeadText">
              <h3>
              Forgot Password?
              </h3>
              <p>
             
              Enter your email and we send you a reset link.
               
              </p>
            </div>
              <div className="isoForgotPassForm">
               <div className="isoInputWrapper">
                    <input
                        className="user"
                        name="username"
                        placeholder="Email Address" 
                    />
               </div>

              <div className="isoInputWrapper">
                 <button className="pwdbutton">
                 sendRequest
                 </button>
               </div>
             </div>
            </div>
          </div>
          </div>
    // <div className="ForgotPasswordStyleWrapper">
    //   <div className="isoForgotPassPage">
    //     <div className="isoFormContentWrapper">
    //       <div className="isoFormContent">
    //         <div className="isoLogoWrapper">
    //           <Link to="/dashboard">
    //           forgetPassTitle
    //           </Link>
    //         </div>

    //         <div className="isoFormHeadText">
    //           <h3>
    //           forgetPassSubTitle
    //           </h3>
    //           <p>
    //           forgetPassDescription
    //           </p>
    //         </div>

    //         <div className="isoForgotPassForm">
    //           <div className="isoInputWrapper">
    //             <input placeholder="Email" />
    //           </div>

    //           <div className="isoInputWrapper">
    //             <button className="pwdbutton">
    //             sendRequest
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   </div>
    );
  }
}
