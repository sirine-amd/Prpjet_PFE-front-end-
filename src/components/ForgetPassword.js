import {useHistory} from 'react-router-dom'
import emailjs from "emailjs-com";

const ForgetPassword = () => {
    let history=useHistory();

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_fyg1sk7', 'template_e4y7sub', e.target, 'rpU0H4IPioZm7-C3F')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
<div  class="page-content3"> 
    <div class="page-content4">
<div class="form-v10-content">
    <form class="form-detail" action="#" method="post" id="myform">
        <div class="form-right">
        <h2>Mot de passe oublié</h2>


          
         
           <div class="label4">  Saisissez votre adresse e-mail pour réinitialiser votre mot de passe. </div>
           <div className="form-row2">
                <input type="Email" name="your_email" id="your_email"  required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="E-mail"/>
</div>

           
            


            <div class="form-row-last">

                <input type="submit"  onClick={()=>{history.push("/EmailEnvoyeForgetPassword")} }name="register" class="register2" value="Renitialiser"/>
            </div>
        </div>
    </form>
</div>
</div>
</div>

);
  }
  export default ForgetPassword;