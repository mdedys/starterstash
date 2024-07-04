import { DocumentReference, FirestoreDataConverter } from "firebase/firestore";
import { useState, useEffect } from "react";

import { useDatabase } from "../db/Database";

type GetDocResult<T> = {
  data: T | null;
  error: Error | null;
  isError: boolean;
  isLoading: boolean;
};

type Options = {
  enabled?: boolean;
};

export default function useGetDoc<T = unknown>(
  ref: DocumentReference<T>,
  converter: FirestoreDataConverter<T>,
  options?: Options,
): GetDocResult<T> {
  const db = useDatabase();

  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!options?.enabled) return;
    const unsub = db.onSnapshot(
      ref,
      converter,
      snapshot => {
        setIsLoading(false);
        if (snapshot.exists()) {
          setData(snapshot.data());
          return;
        }
        setData(null);
      },
      err => setError(err),
    );
    return unsub;
  }, [ref, db, converter, options?.enabled]);

  return { data, error, isError: Boolean(error), isLoading };
}
