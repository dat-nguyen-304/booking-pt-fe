// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQW5U695-OAP_CsZH-S-cUrbth8WTiVc8",
  authDomain: "authen-39b0f.firebaseapp.com",
  projectId: "authen-39b0f",
  storageBucket: "authen-39b0f.appspot.com",
  messagingSenderId: "1049324179570",
  appId: "1:1049324179570:web:c3143a779e2f560aa632eb",
  measurementId: "G-0BN4Q7PR9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logOut = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    localStorage.removeItem("accessToken")
    // Đăng xuất thành công
    
    window.location.reload(); // Tải lại trang
  }).catch((error) => {
    // Xử lý lỗi đăng xuất
    console.log(error);
  });
};

export {
  auth,
  db,
  logOut,
}