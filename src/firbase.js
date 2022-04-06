import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
    {

        apiKey: "AIzaSyCoxTQkZD67OnFJumaJ1bp9IqD8p2U3gWk",
        authDomain: "portfoilo-83b13.firebaseapp.com",
        projectId: "portfoilo-83b13",
        storageBucket: "portfoilo-83b13.appspot.com",
        messagingSenderId: "835124127090",
        appId: "1:835124127090:web:753255fcd05bee99c2e9eb"

    }
)



const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };