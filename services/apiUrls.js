import { FIREBASE_KEY } from '@env';

const apiUrl = {
    signUp: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + FIREBASE_KEY,
    signIn: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + FIREBASE_KEY
}

export default apiUrl;