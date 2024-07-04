import { DocumentReference, doc } from "firebase/firestore";
import { useMemo } from "react";

import { useFirebase } from "../../firebase/Firebase";
import { UserDocument, converter, CollectionKey } from "../models/Users";
import useSetDoc from "../useSetDoc";

export default function useCreateUser(uid: string) {
  const { db } = useFirebase();
  const ref = useMemo(
    () => doc(db, CollectionKey, uid) as DocumentReference<UserDocument>,
    [uid, db],
  );
  return useSetDoc<UserDocument>(ref, converter);
}
