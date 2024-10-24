
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQ2NLB4DRTbG3Nt5JbxQbFJpg_4wp1FMk",
    authDomain: "netfilxclone-69930.firebaseapp.com",
    projectId: "netfilxclone-69930",
    storageBucket: "netfilxclone-69930.appspot.com",
    messagingSenderId: "288705070869",
    appId: "1:288705070869:web:dc1a51c2ab0cbf3a760b1c",
    measurementId: "G-0W3317XLR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore()

const signup = async (name: string, email: string, password: string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, 'user'), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email
        })
    } catch (error) {
        console.log(error)
        alert(error)
    }
}

const login = async (email:string,password:string)=> {
   
  try {
    await signInWithEmailAndPassword(auth,email,password)
  } catch (error) {
    console.log(error)
    alert(error)
  }

}

const logout = ()=> {
    signOut(auth);
}

export {auth,db,login,logout,signup}