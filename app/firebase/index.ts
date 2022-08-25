// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = Object.freeze({
	// @ts-ignore => This has to be accessed by dot notation:
	messagingSenderId: process.env.messagingSenderId ?? "",
	// @ts-ignore => This has to be accessed by dot notation:
	measurementId: process.env.measurementId ?? "",
	// @ts-ignore => This has to be accessed by dot notation:
	storageBucket: process.env.storageBucket ?? "",
	// @ts-ignore => This has to be accessed by dot notation:
	authDomain: process.env.authDomain ?? "",
	// @ts-ignore => This has to be accessed by dot notation:
	projectId: process.env.projectId ?? "",
	// @ts-ignore => This has to be accessed by dot notation:
	apiKey: process.env.apiKey ?? "",
	// @ts-ignore => This has to be accessed by dot notation:
	appId: process.env.appId ?? "",
});

const baseURL = "https://hacker-news.firebaseio.com/v0/";

Object.entries(firebaseConfig).forEach(([key, value]) => {
	if (value.length === 0) console.error(`${key} is not set!`);
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
