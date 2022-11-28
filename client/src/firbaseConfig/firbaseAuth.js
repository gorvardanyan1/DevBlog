
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {app} from './fbconfig'

export const auth = getAuth()

export const provider = new GoogleAuthProvider()

export const googlePopUp = async (auth, provider) => {
   return signInWithPopup(auth, provider)
}


