import { Button, CircularProgress, Container, Grid, TextField, Typography , Alert} from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';
const Register = () => {

    const [loginData, setLoginData] = useState({})

    const { user, registerUser, isLoading, authError } = useAuth();


    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const  handleLoginSubmit = e => {
   if (loginData.password !== loginData.password2) {
    alert('Your password not match');
    return

   }

   registerUser(loginData.email, loginData.password);
   
    e.preventDefault();

}
    return (
        <Container>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}> 
        <Typography variant="body1" gutterBottom>Register </Typography>

        { !isLoading && <form onSubmit={handleLoginSubmit}>
        <TextField 
        sx={{width: "75%", m: 1}}
        id="standard-basic" 
        label="Your Email " 
        name="email"
        type="email"
        onChange={handleOnChange}
        variant="standard"
      

         />
        <TextField 
        sx={{width: "75%", m: 1}}
        id="standard-basic" 
        label="Your password " 
        type="password"
        name="password"
        onChange={handleOnChange}
        variant="standard"
         />
        <TextField 
        sx={{width: "75%", m: 1}}
        id="standard-basic" 
        label="ReType Your Password" 
        type="password"
        name="password2"
        onChange={handleOnChange}
        variant="standard"
         />
        
         <Button sx={{width: "75%", m: 1}} variant="contained" type='submit' >Register</Button>
         <NavLink 
         style={{textDecoration: 'none'}}
         to="/login"> 
         <Button  variant="text">Allredy Registed? Please
         Login </Button>

         </NavLink>
        </form>}
{isLoading && <CircularProgress color="success" /> }
{user?.email && <Alert severity="success">user Created successfully!</Alert> }
            {authError &&       <Alert severity="error">{authError}</Alert>
}

         </Grid>
             <Grid item xs={12} md={6}> 
               <img style={{width: '100%'}} type="submit" src={login} alt="" /> 
             </Grid>
        </Grid>
    </Container>
    );
};

export default Register;