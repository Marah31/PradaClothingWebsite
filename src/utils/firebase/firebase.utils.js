import {initializeApp} from 'firebase/app';
import {
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA5GAirelLOCRvma4Ujk9URMiOlFxugEJM",
  authDomain: "crwn-clothing-db-61e41.firebaseapp.com",
  projectId: "crwn-clothing-db-61e41",
  storageBucket: "crwn-clothing-db-61e41.firebasestorage.app",
  messagingSenderId: "371210560191",
  appId: "1:371210560191:web:874cec593486d402881c0a"
};

const firebaseApp= initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
}); //"select_account" means: when the user clicks sign in, always ask which Google account they want.

export const auth = getAuth();
export const signInWithGooglePopup= () =>signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {})=>{
    if (!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid); //a path in the database to that specific user
    
    const userSnapshot = await getDoc(userDocRef); // check if the user already has a record
    
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc (userDocRef, {
                displayName, email, createdAt, ...additionalInformation,
            });
        } catch (error) {
            console.log('error created the user', error.message);

        }
    }
    return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser =async ()=> await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);