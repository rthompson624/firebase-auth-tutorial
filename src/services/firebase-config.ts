import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBHq5FxqB1oIh3rYM476BgYocJDtrScOcI",
  authDomain: "fir-auth-tutorial-647d8.firebaseapp.com",
  projectId: "fir-auth-tutorial-647d8",
  storageBucket: "fir-auth-tutorial-647d8.appspot.com",
  messagingSenderId: "484135682794",
  appId: "1:484135682794:web:65b27107bab2ef84bd0d93"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
