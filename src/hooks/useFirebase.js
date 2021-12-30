import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged , signOut } from "firebase/auth";
import { Password } from "@mui/icons-material";

initializeFirebase();


const useFirebase = () =>{
const [user, setUser] = useState({});
const auth = getAuth();

const registerUser = (email, Password) =>{
    createUserWithEmailAndPassword(auth, email, Password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
}


const loginUser = (email, Password) => {

    signInWithEmailAndPassword(auth, email, Password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
//observer user state
useEffect( ()=>{
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
         setUser({})
        }
      });
return () => unsubscribe;
}, [])

const logout = () =>{
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });


}
 return {

    user,
    registerUser,
    loginUser,
    logout,

 }
}


export default useFirebase;