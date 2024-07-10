import {
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  FirestoreDataConverter,
  getDoc,
  setDoc,
  updateDoc,
  onSnapshot,
  Unsubscribe,
} from "firebase/firestore";
import { PropsWithChildren, createContext, useContext, useMemo } from "react";

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
  updateDoc(ref: DocumentReference, value: DocumentData): Promise<void>;
};

// @ts-expect-error defining default context
const Context = createContext<DatabaseContext>({});

export default function Database(props: PropsWithChildren) {
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
        ref: DocumentReference<T>,
        value: Partial<T>,
      ) {
        return updateDoc(ref, value);
      },
    }),
    [],
  );
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

export function useDatabase() {
  return useContext(Context);
}
