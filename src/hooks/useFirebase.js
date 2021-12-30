import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged , signOut } from "firebase/auth";
import { Password } from "@mui/icons-material";

initializeFirebase();


const useFirebase = () =>{
const [user, setUser] = useState({});
const [isLoading, setIsLoading] = useState(true);
const [authError, setAuthError] = useState('');

const auth = getAuth();


// Register user

const registerUser = (email, password) =>{
   setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setAuthError('');
      
      })
      .catch((error) => {
        setAuthError(error.message);
        // console.log(error);
      })
      .finally(() => setIsLoading(false));
}


// Login user
const loginUser = (email, password) => {
  setIsLoading(true);

    signInWithEmailAndPassword(auth, email, Password)
  .then((userCredential) => {
    setAuthError('');
     })
    .catch((error) => {
      setAuthError(error.message)
  })
  .finally(() => setIsLoading(false));


}
//observer user state
useEffect( ()=>{
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
         setUser({})
        }
 setIsLoading(false);

      });
return () => unsubscribe;
}, [])

const logout = () =>{
  setIsLoading(true);
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      
      .finally(() => setIsLoading(false));
}
 return {

    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
    logout,

 }
}


export default useFirebase;