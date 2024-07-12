import {
  DocumentReference,
  doc,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";
import { useCallback, useMemo, useState } from "react";

import { useFirebase } from "../../firebase/Firebase";
import { CollectionKey, FirestoreStarter, Starter } from "../models/Users";

type AddStarterResult = {
  isLoading: boolean;
  mutate(data: Starter): Promise<void>;
};

export default function useUpdateStarter(uid: string): AddStarterResult {
  const { db } = useFirebase();

  const [isLoading, setIsLoading] = useState(false);

  const ref = useMemo(
    () => doc(db, CollectionKey, uid) as DocumentReference,
    [uid, db],
  );

  const mutate = useCallback(
    (next: Starter) => {
      setIsLoading(true);
      return runTransaction(db, async t => {
        const doc = await t.get(ref);
        if (!doc.exists()) throw "Document does not exists";
        const data = doc.data();
        t.update(ref, {
          ...data,
          updatedAt: serverTimestamp(),
          starters: data.starters.map((starter: FirestoreStarter) => {
            if (starter.id !== next.id) return starter;
            return {
              ...next,
              reminder: next.reminder.toMillis(),
            };
          }),
        });
      }).finally(() => setIsLoading(false));
    },
    [db, ref],
  );

  return { isLoading, mutate };
}
