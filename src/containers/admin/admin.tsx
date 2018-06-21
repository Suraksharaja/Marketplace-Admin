import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { login, logout, loginPending, userLoggedIn } from '../../actions/login_actions';
import { StoreState } from '../../types';
import { Dispatch, connect } from 'react-redux';
import { Action } from '../../actions/type';

interface LoginProps {
	login?: any;
	logout?: any;
	loginPending?: any;
	isLoginPending?: any;
	viewError?: boolean;
	loginError?: string;
  userLoggedIn?: any;
  userInfo?: any;
}

interface LoginState {
	username: String;
	password: String;
	forms: any;
  formValid: any;
  loggedIn: any;

}

class SignIn extends React.Component<LoginProps, LoginState> {

  constructor(props: LoginProps) {
		super(props);
		this.state = {
			username: '',
			password: '',
			forms: { signIn: false, signUp: true, pwd: true },
      formValid: { errMsg: '', user: true, pwd: true },
      loggedIn: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.login = this.login.bind(this);
		this.change = this.change.bind(this);

	}
	componentDidMount() {
    // this.userLoggedIn();
    
	}
 
	async login(event: any): Promise<any> {
		event.preventDefault(); console.log(this.props.userInfo);
		this.setState({ formValid: { username: '', user: true, pwd: true } });
		if (this.state.username.length !== 0 && this.state.password.length !== 0) {
			if (this.state.username.includes('@') || this.state.username.length === 10) {
				try {
          this.props.login({ username: this.state.username, password: this.state.password, Login: true });
          console.log('fff');
          console.log(this.props.userInfo);
				} catch (e) {
					this.setState({ formValid: { errMsg: 'Invalid userId or Password', pwd: false, user: true } });
				}

			} else {
				this.setState({ formValid: { errMsg: 'Enter valid username', user: false, pwd: true } });
			}
		} else {
			this.setState({ formValid: { errMsg: 'Enter user name and password', pwd: false, user: true } });

		}

		return;

  }

	handleChange(event: any): void {
		const elemName = event.target.name;
		this.setState({ [elemName]: event.target.value }); console.log(this.state.username);

	}
	async change(show: string): Promise<any> {
		localStorage.setItem(
			'pwdChange',
			JSON.stringify({ userData: '' })
		);
		this.setState({ formValid: { errMsg: '', pwd: true, user: true } });
		if (show === 'in') {
			this.setState({
				forms: { signIn: false, signUp: true, pwd: true }

			});
		} else if (show === 'up') {
			this.setState({
				forms: { signIn: true, signUp: false, pwd: true }

			});
		} else {
			this.setState({
				forms: { signIn: true, signUp: true, pwd: false }
			});

		}

	}
	userLoggedIn() {
		var Existing = null;
		if (localStorage.getItem('userDetails')) {
			Existing = localStorage.getItem('userDetails');
			if (Existing) {
        const parseExisting = JSON.parse(Existing);
        this.props.userLoggedIn(parseExisting.userData);
        this.setState({loggedIn: true});
			}
		}
	}
  render() {
      if (this.props.userInfo) {
       
          return (<Redirect to="/dashboard" />);
        
      }
      return (
        <div className="SignInStyleWrapper"> 
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper b">
              <Link to="/dashboard">
               JetCarts! Admin{this.props.userInfo}
              </Link>
            </div>
						<form className="measure center w-100" onSubmit={this.login} >
							<fieldset id="sign_up" className="field">
        
                <div >
                
                  <input
                      className="user"
                      name="username"
                      placeholder="Email Address / Phone Number"
                      onChange={this.handleChange}
                  />
                  <div className="red" hidden={this.state.formValid.user}>{this.state.formValid.errMsg}</div>
                </div>

                <div >
                  <input
                      type="password"
                      className="user"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                  />
                </div>
                <div className="red" hidden={this.state.formValid.pwd}>{this.state.formValid.errMsg}</div>
							</fieldset>
              <div className="loginbtn">                  
                  <button className="curve">
                
                  SignIn
             
                  </button>
                </div>
            
                <div className="fgtpwd">
                  <Link to="/forgotpassword">
                  ForgotPassword
                  </Link> 
                
              </div>
						</form>
            </div>
          </div>
          </div>
      );
    }
  }

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: any):  LoginProps => {
    return {
      login: (userInfo: any) => { 
        dispatch(login(userInfo));
      },
      logout: (quantity: boolean) => { 
        dispatch(logout(quantity));
      },
      loginPending: (modal: boolean) => { 
        dispatch(loginPending(modal));
      },
      userLoggedIn: (user: any) => { 
        dispatch(userLoggedIn(user));
      }
    };
  };
const mapStateToProps = (state: StoreState): LoginProps => {
    console.log(state.userInfo);
    return {
      isLoginPending: state.userInfo.isLoginPending,
      viewError: state.userInfo.viewError,
      userInfo: state.userInfo.userInfo,
      loginError: state.userInfo.loginError
      
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
