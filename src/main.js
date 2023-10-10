import { createApp } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import App from "./App.vue";
import router from "./router";
import store from "./store";
const firebaseConfig = {
  apiKey: "AIzaSyA0LzzCUIA-4p2m56Mn6AnZsbr3qKXyttM",
  authDomain: "crud-auth-e097f.firebaseapp.com",
  projectId: "crud-auth-e097f",
  storageBucket: "crud-auth-e097f.appspot.com",
  messagingSenderId: "869988533509",
  appId: "1:869988533509:web:c87596b19eef138fdca36c",
  measurementId: "G-YMPB9R2QR9",
};

firebase.initializeApp(firebaseConfig);
const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
