const firebaseConfig = {
  apiKey: "AIzaSyAVeA0v1o_Sqd8gjrvY7VAEEdFe7HoanuU",
  authDomain: "todo-list-50ed5.firebaseapp.com",
  projectId: "todo-list-50ed5",
  storageBucket: "todo-list-50ed5.appspot.com",
  messagingSenderId: "477623490389",
  appId: "1:477623490389:web:1efd54f0efbff7b48641dc",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
