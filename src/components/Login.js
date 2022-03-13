import {useHistory} from 'react-router-dom'
import {useState} from 'react';
import {userLogin} from '../services/UserService';
import { connect } from 'react-redux';
import {Spinner} from 'react-bootstrap';

import { authenticate, authFailure, authSuccess } from '../redux/authActions';

const Login=({loading,error,...props})=>{
    console.log("response",props);

    let history=useHistory();

    const [values, setValues] = useState({
      userName: '',
      password: ''
      });

      const handleSubmit=(evt)=>{
        evt.preventDefault();
        props.authenticate();

        userLogin(values).then((response)=>{

            if(response.status===200){
                props.setUser(response.data);
                props.history.push('/Accueil_admin');
            }
            else{
               props.loginFailure('Something Wrong!Please Try Again'); 
            }


        }).catch((err)=>{

            if(err && err.response){
            
            switch(err.response.status){
                case 401:
                    console.log("401 status");
                    props.loginFailure("Authentication Failed.Bad Credentials");
                    break;
                default:
                    props.loginFailure('Something Wrong!Please Try Again'); 

            }

            }
            else{
                props.loginFailure('Something Wrong!Please Try Again');
            }
                

            

        });
        //console.log("Loading again",loading);

        
    }

    const handleChange = (e) => {
      e.persist();
      setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
      }));
  };

  console.log("Loading ",loading);
    return (
        <div className="page-content2">
        <section className="ftco-section">
		 <div className="container">
        <div className="row justify-content-center">
            
        </div>
        <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
                <div className="wrap d-md-flex">
                    <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                        <div className="text w-100">
                            <h2>Bienvenue</h2>
                            <br></br>
                            <p>Vous n'avez pas un compte?</p>
                            <br></br>

                            <button className="btn btn-white btn-outline-white" onClick={()=>{history.push("/Inscription")}}>Inscripion</button>
                        </div>
              </div>
                    <div className="login-wrap p-4 p-lg-5">
                  <div className="d-flex">
                      <div className="w-100">
                        <h2>Connexion </h2>
                     </div>
                  </div>
                        <form action="#" className="signin-form" onSubmit={handleSubmit}>
                      <div className="form-group mb-3">
                          <label className="label" for="name">User-Name</label>
                      
                          <input id="username" type="text" className="form-control"  value={values.userName} onChange={handleChange} name="userName" required />
 
{/*                         <input type="text" className="form-control"  minLength={8} value={values.userName} onChange={handleChange}  placeholder="User Name " required/>
 */}                      </div>
                <div className="form-group mb-3">
                    <label className="label" for="password">Mot de passe</label>
                    <input id="password" type="password" className="form-control"  value={values.password} onChange={handleChange} name="password" required/>

{/*                   <input type="password" className="form-control"  value={values.password} onChange={handleChange} placeholder="Mot de passe" required/>
 */}                </div>
             
                <div className="form-group">
                    <button type="submit" className="form-control btn btn-primary submit px-3">Connecter
                    {loading && (
                                            <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                          />
                                        )}
                    </button>
                </div>
                <div className="form-group d-md-flex">
                    
                                <div className="w-100 text-md-center">
                                <p  className="btn-mot" onClick={()=>{history.push("/ForgetPassword")}}> Mot de passe oublié</p>
                                </div>
                </div>
              </form>
            </div>
          </div>
            </div>
        </div>
    </div>
    
	</section>
</div>



    )}

    const mapStateToProps=({auth})=>{
        console.log("state ",auth)
        return {
            loading:auth.loading,
            error:auth.error
    }}
    
    
    const mapDispatchToProps=(dispatch)=>{
    
        return {
            authenticate :()=> dispatch(authenticate()),
            setUser:(data)=> dispatch(authSuccess(data)),
            loginFailure:(message)=>dispatch(authFailure(message))
        }
    }
  export default connect(mapStateToProps,mapDispatchToProps)(Login);