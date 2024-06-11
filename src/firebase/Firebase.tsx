import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore/lite";
import { PropsWithChildren, createContext, useContext, useState } from "react";

const CONFIG = {
  apiKey: "AIzaSyDX4DLUnsfvBzuKEnOG7vBy-cmsoWpS020",
  authDomain: "starterstash.firebaseapp.com",
  projectId: "starterstash",
  storageBucket: "starterstash.appspot.com",
  messagingSenderId: "514079507055",
  appId: "1:514079507055:web:fad4e1e8b5a6770914439a",
  measurementId: "G-0467XWSCCF",
};

type FirebaseContext = {
  app: FirebaseApp;
  db: Firestore;
  auth: Auth;
};

// @ts-expect-error initial definition
const Context = createContext<FirebaseContext>({});

export default function Firebase(props: PropsWithChildren) {
  const [app] = useState(initializeApp(CONFIG));
  const [db] = useState(getFirestore(app));
  const [auth] = useState(getAuth(app));
  return (
    <Context.Provider value={{ app, db, auth }}>
      {props.children}
    </Context.Provider>
  );
}

export function useFirebase() {
  return useContext(Context);
}
