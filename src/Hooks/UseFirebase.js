import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Swal from "sweetalert2";
import FirebaseInitialization from "../FirebaseAuthentication/Firebase.Init";

FirebaseInitialization();
const UseFirebase = () => {
  const location = useLocation();
  const redirect_url = location?.state?.from || "/home";
  const history = useHistory();

  //for google signin
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //check admin from database
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    fetch(`https://obscure-coast-47054.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  //fnction for google signin
  const handleGoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        saveUserToDatabase(result.user.email, result.user.displayName, "PUT");
        console.log(result.user.email, result.user.displayName);
        setError("");
      })
      .finally(() => {
        setLoading(false);
        history.push(redirect_url);
      });

    /* signInWithPopup(auth, googleProvider).then((result) => {
    setUser(result.user);
  }); */
  };

  //for gmail registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [loading, setLoading] = useState(true);

  //set data for gmail registration
  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleRetypePasswordChange = (e) => {
    setRetypePassword(e.target.value);
    console.log(e.target.value);
  };

  //function for registration handling
  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    /*  if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password Must contain 2 upper case");
      return;
    } */
    if (password !== retypePassword) {
      setError("sorry, your password didn't match!");
      return;
    }
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
        verifyEmail();
        setUserNameToFirebase();
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUserToDatabase(email, name, "POST");
        Swal.fire(
          "Your Registration is Complete!",
          "we have sent a link in your email. please verify your email now",
          "success"
        );
        history.push(redirect_url);
        logOut();
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const setUserNameToFirebase = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };
  //save user in the database
  const saveUserToDatabase = (email, displayName, METHOD) => {
    const user = { email, displayName };
    fetch("https://obscure-coast-47054.herokuapp.com/users", {
      method: METHOD,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        /*  const user = result.user;
        if (!user.emailVerified) {
          Swal.fire(
            "Your Email is not Verifyed Yet!",
            "please verify your email first.",
            "error"
          );
          return;
        } */
        history.push(redirect_url);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        // logout successful.
      })
      .finally(() => setLoading(false));
  };

  //observer wheather user changed state or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  return {
    user,
    admin,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleRetypePasswordChange,
    handleRegistration,
    handleLogin,
    handleGoogleSignIn,
    logOut,
    loading,
    error,
  };
};

export default UseFirebase;
