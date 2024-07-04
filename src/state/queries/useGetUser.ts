import { DocumentReference, doc } from "firebase/firestore";
import { useMemo } from "react";

import { useFirebase } from "../../firebase/Firebase";
import { UserDocument, converter, CollectionKey } from "../models/Users";
import useGetDoc from "../useGetDoc";

export default function useGetUser(uid: string) {
  const { db } = useFirebase();
  const ref = useMemo(
    () => doc(db, CollectionKey, uid) as DocumentReference<UserDocument>,
    [db, uid],
  );
  return useGetDoc<UserDocument>(ref, converter, { enabled: Boolean(uid) });
}
