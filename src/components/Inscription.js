import {useHistory} from 'react-router-dom'
import {UserIns} from '../services/UserService';
import { connect } from 'react-redux';
import {Spinner} from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { authenticate, authFailure } from '../redux/authActions';
import validator from 'validator'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const Inscription =({loading,error,...props})=>{
  
 let history=useHistory();

  const [values, setValues] = useState({
            userName: '',
            password: '',
            nom: '',
            prenom: '',
            date_de_naissance: '',
            numero_de_telephone: '',
            adressse: '',
            etat_civil: '',
            email: '',
            Genre: '',
            roles:'',

          });

          
          const handleSubmit=(evt)=>{
              values.adressse=evt.adresse;
              values.nom=evt.nom;
              values.prenom=evt.prenom;
              values.Genre=evt.genre;
              values.email=evt.email;
              values.etat_civil=evt.etat_civil;
              values.numero_de_telephone=evt.numero_de_telephone;
              values.date_de_naissance=evt.date_de_naissance;
              values.userName=evt.nom;
              values.roles=evt.roles;
         //   evt.preventDefault();
            props.authenticate();
           UserIns(values).then((response)=>{
    
                if(response.status===200){
                    props.setUser(response.data);
                    props.history.push('/');
    
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

    return (
        <Formik
                initialValues={{
                    date_de_naissance: '',
                    prenom: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    nom:'',
                    numero_de_telephone:'',
                    adresse:'',
                    roles:'',
                    etat_civil:'' 
                }}
                validationSchema={Yup.object().shape({
                    date_de_naissance: Yup.string()
                        .required('date_de_naissance est invalide'),
                    nom: Yup.string()
                        .required('nom est invalide'),
                    prenom: Yup.string()
                        .required('First Name is required')
                        .min(8, 'nom est minimum 8 caracteres'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is invalid'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required'),
                    numero_de_telephone:Yup.number()
                        .required('Numero de telephone est invalide')
                        .typeError("Numero de telephone invalide")
                        .min(8, 'Numero de telephone de 8 chifres')
                        .integer("A phone number can't include a decimal point"),
                    adresse:Yup.string()
                        .required('Adresse est invalide')
                        .min(8, 'adresse est minimum 8 caracteres'),
                     etat_civil:Yup.string()
                        .required('Etat civil est invalide'),
                    roles:Yup.string()
                        .required('Etat civil est invalide'),
                 })}
              onSubmit={(values) =>handleSubmit(values)}
                render={({ errors, status, touched }) => (
                    <div  class="page-content3"> 
                    <div class="page-content">
                <div class="form-v10-content">
                    <Form class="form-detail" >
                    <div class="form-left">
            <h2>Inscription </h2>
           
            <div class="form-group">
                <div class="form-row form-row-1">
                  
                    <Field type="text"  name="nom" style={{"border-radius": 0}} className={' form-control' + (errors.nom && touched.nom ? ' is-invalid' : '')}   placeholder="Nom" />
                   
                    <ErrorMessage style={{ fontSize: 12, color: "red" }} name="nom" component="div" className="invalid-feedback" />
                    
         
                </div>
                <div class="form-row form-row-2">
                <Field type="text" name="prenom" style={{"border-radius": 0}} className={' form-control' + (errors.prenom && touched.prenom ? ' is-invalid' : '')}   placeholder="Prenom"/>
                   
                   <ErrorMessage style={{ fontSize: 12, color: "red" }} name="prenom" component="div" className="invalid-feedback" />
                 
                </div>
            </div>



            <div class="form-group">
            <div class="form-row form-row-5">
          <div class="label2">  Date de naissance : </div>
          </div>
          <div class="form-row form-row-6">  
           <Field type="date" id="date_de_naissance" style={{"border-radius": 0}}  name="date_de_naissance" min="1920-01-01" max="2020-12-31" className={' form-control' + (errors.date_de_naissance && touched.date_de_naissance ? ' is-invalid' : '')}/>
           <ErrorMessage style={{ fontSize: 12, color: "red" }} name="date_de_naissance" component="div" className="invalid-feedback" />

            </div>
            </div>




            <div class="form-group">
            <div class="input-group">
            <div class="form-row form-row-5">
                                    <label class="label1">Genre :</label>
            </div> <div class="form-row form-row-6">
                                    <div class="p-t-10">
                                        <label class="radio-container m-r-45">Homme
                                            <input type="radio" checked="checked"  name="genre" value={values.genre="Homme"} onChange={handleChange}/>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="radio-container">Femme
                                            <input type="radio"  name="genre" value={values.genre="Femme"} onChange={handleChange}/>
                                            <span class="checkmark"></span>
                                        </label>
                                        </div>
            </div>         
            </div>
            </div>


           
        


               
                <div class="form-row">
                    <Field type="tel" id="numero_de_telephone" style={{"border-radius": 0}}  name="numero_de_telephone" className={' form-control' + (errors.numero_de_telephone && touched.numero_de_telephone ? ' is-invalid' : '')}placeholder="Numero de telephone"/>
           <ErrorMessage style={{ fontSize: 12, color: "red" }} name="numero_de_telephone" component="div" className="invalid-feedback" />

                </div>
           
                <br></br>

            <div class="form-row">
            <Field type="text" name="adresse" style={{"border-radius": 0}} className={' form-control' + (errors.adresse && touched.adresse ? ' is-invalid' : '')}   placeholder="Adresse"/>
                   
                   <ErrorMessage style={{ fontSize: 12, color: "red" }} name="adresse" component="div" className="invalid-feedback" />
            
            </div>

            
        </div>
        <div class="form-right">

        <br></br>
        <br></br>
        <br></br>

            <div class="form-group">
                <div class="form-row form-row-1">
                <div class="label3">  Vous etes un : </div>

                </div>
                <div class="form-row form-row-2">
                    

<Field
                  name="roles" 
                  component="select" style={{"border-radius": 0}} className={' form-control' + (errors.roles && touched.roles ? ' is-invalid' : '')} >
                    
                  <option  value="" disabled selected hidden></option>
                  <option  value="User_Condidat" >Candidat</option>
                  <option  value="User_Profeser" >Formateur</option>
            
                </Field>
                    <span class="select-btn">
                          <i class="zmdi zmdi-chevron-down"></i>
                    </span>
                    <ErrorMessage style={{ fontSize: 12, color: "red" }} name="roles" component="div" className="invalid-feedback" />

                </div>
            </div>



          



            <div class="form-row">
            <Field
                  name="etat_civil" 
                  component="select" style={{"border-radius": 0}}  className={' form-control' + (errors.etat_civil && touched.etat_civil ? ' is-invalid' : '')}>
                    
                  <option  value="" disabled selected hidden>Etat civil</option>
                  <option  value="Celibataire" >Celibataire</option>
                  <option  value="Marié(e)" >Marié(e)</option>
            
                </Field>
                <span class="select-btn">
                      <i class="zmdi zmdi-chevron-down"></i>
                </span>
                   
                   <ErrorMessage style={{ fontSize: 12, color: "red" }} name="etat_civil" component="div" className="invalid-feedback" />
   
            </div>
<br></br>
            <div class="form-row">
            <Field type="text" id="email" style={{"border-radius": 0}}  name="email" className={' form-control' + (errors.email && touched.email ? ' is-invalid' : '')}placeholder="E-mail"/>
           <ErrorMessage style={{ fontSize: 12, color: "red" }} name="email" component="div" className="invalid-feedback" />

              
            </div>
            <br></br>
            <div class="form-row">
            <Field type="password" id="password" style={{"border-radius": 0,color:'white'}}  name="password" className={' form-control' + (errors.password && touched.password ? ' is-invalid' : '')}placeholder="Mot de passe"/>
                <ErrorMessage name="password" component="div" className="invalid-feedback" />

            </div>
            <br></br>
            <div class="form-row">
            <Field type="password" id="confirmPassword" style={{"border-radius": 0}}  name="confirmPassword" className={' form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')}placeholder="Confirmer le mot de passe"/>
            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />

            </div>
            
            
            <div class="form-row-last">
            <div className="form-group">
                           </div>
                <input type="submit" name="register" class="register" value="Valider"/>

            </div>
        </div>
                    </Form>
                    </div></div></div>
                )}
            />
);
  }
  const mapStateToProps=({auth})=>{
    console.log("state ",auth)
    return {
        loading:auth.loading,
        error:auth.error
}}


const mapDispatchToProps=(dispatch)=>{

    return {
      authenticate :()=> dispatch(authenticate()),
      //  setUser:(data)=> dispatch(authSuccess(data)),
        loginFailure:(message)=>dispatch(authFailure(message))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Inscription);