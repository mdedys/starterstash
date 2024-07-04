import {
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  FirestoreDataConverter,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  onSnapshot,
  Unsubscribe,
} from "firebase/firestore";
import { PropsWithChildren, createContext, useContext, useMemo } from "react";

import { useFirebase } from "../firebase/Firebase";

const KEY_USERS_DOC = "users";

type DatabaseContext = {
  getDoc<T>(
    ref: DocumentReference<T>,
    converter: FirestoreDataConverter<T>,
  ): Promise<DocumentSnapshot<T, DocumentData>>;
  onSnapshot<T>(
    ref: DocumentReference<T>,
    converter: FirestoreDataConverter<T>,
    onNext: (data: DocumentSnapshot<T>) => void,
    onError?: (err: Error) => void,
  ): Unsubscribe;
  setDoc<T>(
    ref: DocumentReference<T>,
    value: T,
    converter: FirestoreDataConverter<T>,
  ): Promise<void>;
  updateDoc<T>(
    uid: string,
    value: Partial<T>,
    converter: FirestoreDataConverter<T>,
  ): Promise<void>;
};

// @ts-expect-error defining default context
const Context = createContext<DatabaseContext>({});

export default function Database(props: PropsWithChildren) {
  const { db } = useFirebase();

  const value = useMemo<DatabaseContext>(
    () => ({
      getDoc: function _getDoc<T = DocumentData>(
        ref: DocumentReference<T>,
        converter: FirestoreDataConverter<T>,
      ) {
        return getDoc(ref.withConverter(converter));
      },
      onSnapshot: function _onSnapshot<T = DocumentData>(
        ref: DocumentReference<T>,
        converter: FirestoreDataConverter<T>,
        onNext: (data: DocumentSnapshot<T>) => void,
        onError: (err: Error) => void,
      ) {
        return onSnapshot(ref.withConverter(converter), onNext, onError);
      },
      setDoc: function _setDoc<T = DocumentData>(
        ref: DocumentReference<T>,
        value: T,
        converter: FirestoreDataConverter<T>,
      ) {
        return setDoc(ref.withConverter(converter), value);
      },
      updateDoc: function _updateDoc<T>(
        uid: string,
        value: Partial<T>,
        converter: FirestoreDataConverter<T>,
      ) {
        const ref = doc(db, KEY_USERS_DOC, uid);
        return updateDoc(ref.withConverter(converter), value);
      },
    }),
    [db],
  );

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

export function useDatabase() {
  return useContext(Context);
}
