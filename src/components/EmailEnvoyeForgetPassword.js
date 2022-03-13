import {useHistory} from 'react-router-dom'

const EmailEnvoyeForgetPassword = () => {
    let history=useHistory();

    return (
<div  class="page-content3"> 
    <div class="page-content4">
<div class="form-v10-content">
    <form class="form-detail" action="#" method="post" id="myform">
        <div class="form-right">
        <h2>E-mail envoyé</h2>


          
         
           <div class="label5"> Vérifiez votre boîte de réception amdounisirine80@gmail.com,vous allez recevoir un mail contenant votre code d'autorisation ,veuilliez le renseigner ci-dessous pour valider pour valider la modification de votre mot de passe </div>
         
     <div class="form-row-last">
     <div className="form-row3">
     <input type="text"   required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="Code"/>
</div>
 
                <input type="submit" onClick={()=>{history.push("/Reinitialiser_mdp")} } name="register" class="register3" value="Valider"/>
   
            </div>
            
            <div className=" text-md-center">
                <h4>Vous n'avez pas reçu l'e-mail ? <span className="btn-mot2"> Renvoyer</span> </h4> 
                              <br></br>
                                </div>
                                
        </div>
    </form>
</div>
</div>
</div>
);
  }
  export default EmailEnvoyeForgetPassword;