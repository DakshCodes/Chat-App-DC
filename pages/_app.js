import Loading from '@/components/Loading';
import '@/styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import Login from './login'
import { useEffect } from 'react';

import { updateDoc, serverTimestamp } from "firebase/firestore";
import { collection, doc, setDoc } from "firebase/firestore"




export default function App({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);


  useEffect(() => {
    // Add a new document in collection "cities"
    if (user) {

      setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        lastSeen: serverTimestamp(),
        photoURL: user.photoURL,
      }, { merge: true });
    }

  }, [user])




  if (loading) return <Loading />
  if (!user) return <Login />;

  return <Component {...pageProps} />
}
