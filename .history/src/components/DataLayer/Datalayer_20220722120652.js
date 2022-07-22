import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { auth, fs } from "../firebase";

// Prepares for dataLayer
const StateContext = createContext();

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [fullName, setFullName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");
  const [SuccessMsg, setSuccessMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassWord, setRePassWord] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // !------------
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((credentials) => {
        fs.collection("users")
          .doc(credentials.user.uid)
          .set({
            fullname: fullName,
            Email: email,
            if(setPassword ===setRePassWord) {
              password: password,
            }
            password: password,
          })
          .then(() => {
            navigate("/");
          });
      })
      .catch((err) => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
          case "auth/user-not-found":
            setEmailError(err.message);
          // eslint-disable-next-line no-fallthrough
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  //

  const handleSignin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((err) => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
          // eslint-disable-next-line no-fallthrough
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  // !------------
  //
  function GetcurrentUser() {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect((currentUser) => {
      auth.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          fs.collection("users")
            .doc(currentUser.uid)
            .get()
            .then((snapshot) => {
              setCurrentUser(snapshot.data().FullName);
            });
        } else {
          setCurrentUser(null);
        }
      });
    }, []);
    return currentUser;
  }
  const currentUser = GetcurrentUser();
  //
  //
  const handleLogOut = () => {
    setIsActive(false);
    if (currentUser) {
      auth.signOut();
    }
  };

  //
  const value = {
    setSuccessMsg,
    setErrorMsg,
    fullName,
    setFullName,
    isActive,
    setIsActive,
    currentUser,
    email,
    setEmail,
    emailError,
    password,
    setRePassWord,
    setPassword,
    setEmailError,
    setPasswordError,
    passwordError,
    GetcurrentUser,
    handleLogOut,
    handleSignin,
    handleSignup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
const useStateValue = () => useContext(StateContext);
export {
  StateContext,
  StateProvider,
  useStateValue,
  AuthContext,
  AuthProvider,
};
