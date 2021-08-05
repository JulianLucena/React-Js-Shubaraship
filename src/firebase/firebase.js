import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    //OBJETO DE FIREBASE
    apiKey: "AIzaSyDUfnWLjdv6RuAgtXeZIGkhybiANNdaUtQ",
    authDomain: "shubaraship.firebaseapp.com",
    projectId: "shubaraship",
    storageBucket: "shubaraship.appspot.com",
    messagingSenderId: "544575854850",
    appId: "1:544575854850:web:74bcc8b0453910346e4a1b",
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return app;
}

export const database = firebase.firestore();