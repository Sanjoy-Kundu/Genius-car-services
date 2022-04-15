// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAekN0UgoiXQfsKHD_VJTywkYLqNT1OdLU",
	authDomain: "genius-car-services-735ee.firebaseapp.com",
	projectId: "genius-car-services-735ee",
	storageBucket: "genius-car-services-735ee.appspot.com",
	messagingSenderId: "710643800414",
	appId: "1:710643800414:web:81f6837ea86e2c41d797cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;