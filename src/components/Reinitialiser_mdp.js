const Reinitialiser_mdp = () => {
    return (
<div  class="page-content3"> 
    <div class="page-content4">
<div class="form-v10-content">
    <form class="form-detail" action="#" method="post" id="myform">
        <div class="form-right">
        <h2>Reinitialiser le mot de passe</h2>


          
         
           <div class="label5"> saisissez un nouveau mot de passe pour votre compte.</div>
         
     <div class="form-row-last">
     <div className="form-row3">
     <input type="password"   required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="Mot de passe"/>
<br></br><br></br>

     <input type="password"   required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="Confirmer mot de passe"/>
</div>
 
                <input type="submit" name="register" class="register3" value="Réinitialiser"/>
                <br></br>
                <br></br>

            </div>
            
                                
        </div>
    </form>
</div>
</div>
</div>
);
  }
  export default Reinitialiser_mdp;