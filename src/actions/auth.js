import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "@firebase/auth";
import { googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types"

//Esta es la forma largas 

// export const login = (uid, displayName) => {
//     return {
//         type: types.login,
//         payload: {
//             uid,
//             displayName
//         }
//     }
// }

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        const auth = new getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            })

    }
}


export const startregisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {

        const auth = new getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(user, { displayName: name });
                dispatch(login(user.uid, user.displayName));
            })
            .catch(error => {
                console.log(error);
            })

    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            })
    }
}

export const login = (uid, displayName) => ({

    type: types.login,
    payload: {
        uid,
        displayName
    }

})