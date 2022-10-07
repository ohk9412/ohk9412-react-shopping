import { EmailAuthProvider,  getAuth,  signInWithPopup,  signOut } from "firebase/auth";
import { googleProvider, firebaseAuth } from './firebase';

class AuthService{
    login(providerName) {
        const authProvider = this.getprovider(providerName)
        return signInWithPopup(firebaseAuth,authProvider)
    }

    logout () {
        const auth = getAuth();
        return signOut(firebaseAuth);
    }

    onAuthChange(onUserChanged){
        firebaseAuth.onAuthStateChanged(user => {
            onUserChanged(user);
        })
    }

    // emailsignup () {
    //     const auth = getAuth();
    //     createUserWithEmailAndPassword(auth,email,password).then((userCredentail) => {
    //     const user = userCredentail.user;
    //     }).catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     });
    // }

    // emailsignin () {
    //     const auth = getAuth();
    //     signInWithEmailAndPassword(auth, email, password)
    //       .then((userCredential) => {
    //         // Signed in
    //         const user = userCredential.user;
    //         // ...
    //       })
    //       .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //       });
    // }
    
    emailsignout () {
        signOut(firebaseAuth).then(()=> {
        }).catch((error)=> {});
    }

    getprovider(providerName) {
        switch(providerName){
            case 'Email':
                return EmailAuthProvider.PROVIDER_ID;
            case 'Google':
                return googleProvider;
            default:
                throw new Error(`not supported provider: ${providerName}`)
        }
    }

}

export default AuthService