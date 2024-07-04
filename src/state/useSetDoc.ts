import { DocumentReference, FirestoreDataConverter } from "firebase/firestore";
import { useCallback, useState } from "react";

import { useDatabase } from "../db/Database";

type SetDocResult<T> = {
  isLoading: boolean;
  mutate: (data: T) => Promise<T>;
};

export default function useSetDoc<T = unknown>(
  ref: DocumentReference<T>,
  converter: FirestoreDataConverter<T>,
): SetDocResult<T> {
  const db = useDatabase();
  const [isLoading, setIsLoading] = useState(false);

  const mutate = useCallback(
    (data: T) => {
      setIsLoading(true);
      return db
        .setDoc(ref, data, converter)
        .then(() => data)
        .finally(() => {
          setIsLoading(false);
        });
    },
    [db, ref, converter],
  );

  return { isLoading, mutate };
}
