import { DocumentReference, arrayRemove, doc } from "firebase/firestore";
import { useCallback, useMemo } from "react";

import { useFirebase } from "../../firebase/Firebase";
import { CollectionKey, Starter, UserDocument } from "../models/Users";
import useUpdateDoc from "../useUpdateDoc";

type AddStarterResult = {
  isLoading: boolean;
  mutate(data: Starter): Promise<void>;
};

export default function useDeleteStarter(uid: string): AddStarterResult {
  const { db } = useFirebase();

  const ref = useMemo(
    () => doc(db, CollectionKey, uid) as DocumentReference<UserDocument>,
    [uid, db],
  );

  const update = useUpdateDoc(ref);

  const mutate = useCallback(
    (data: Starter) => {
      return update.mutate({
        starters: arrayRemove({ ...data, reminder: data.reminder.toMillis() }),
      });
    },
    [update],
  );

  return { isLoading: update.isLoading, mutate };
}
