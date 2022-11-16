import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! APP INFO

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGİNG_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! REGISTER
export const register = async (email, password, fullname, navigate) => {
  try {
    let user = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: fullname,
    });
    console.log(user);
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! LOGIN
export const login = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
  } catch (error) {
    alert(error.message);
  }
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! LOGOUT
export const logout = () => {
  signOut(auth);
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! SIGN IN WITH GOOGLE
export const signUpGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! USER OBSERVER
export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName, photoURL } = user;
      setCurrentUser({ email, displayName, photoURL });
    } else {
      setCurrentUser(false);
    }
  });
};
