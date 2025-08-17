import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup= () =>signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth)=>{
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc (userDocRef, {
                displayName, email, createdAt
            });
        } catch (error) {
            console.log('error created the user', error.message);

        }
    }
    return userDocRef;
}