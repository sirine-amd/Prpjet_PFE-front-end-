import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {fetchUserData} from '../services/UserService';
import { Button, Container } from 'react-bootstrap';



const Accueil_admin =(props)=>{

  const dispatch=useDispatch();
  const [loading,setLoading]=useState(false);
  const [data,setData]=useState({});

  React.useEffect(()=>{
      fetchUserData().then((response)=>{
          setData(response.data);
          console.log("hello",response.data);
      }).catch((e)=>{
          localStorage.clear();
          props.history.push('/');
      })
  },[])

  const logOut=()=>{

      localStorage.clear();
      props.history.push('/');

  }
  return (
    <Container>
        <h4>Hello {data && `${data.nom} ${data.prenom}`}</h4>
        <br></br>
        {data && data.roles && data.roles.filter(value => value.roleName==='Admin').length>0 && <Button type="variant">Gestion des utilisateurs</Button> }
        <br></br>
        {data && data.roles && data.roles.filter(value => value.roleName==='Admin').length>0 && <Button type="variant">Traitement des reclamations</Button> }
        {data && data.roles && data.roles.filter(value => value.roleName==='User_Profeser').length>0 && <Button type="variant">Gestion des examens</Button> }
        {data && data.roles && data.roles.filter(value => value.roleName==='User_Profeser').length>0 && <Button type="variant">Gestion des formations</Button> }
        {data && data.roles && data.roles.filter(value => value.roleName==='User_Condidat').length>0 && <Button type="variant">Suivre une formation</Button> }
        {data && data.roles && data.roles.filter(value => value.roleName==='User_Condidat').length>0 && <Button type="variant">Passer un examen</Button> }

        <br></br>

        <Button style={{marginTop:'5px'}} onClick={() =>logOut()}>Logout</Button>
</Container>
    );
  }
  export default Accueil_admin;