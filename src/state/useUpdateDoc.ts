import { DocumentData, DocumentReference } from "firebase/firestore";
import { useCallback, useState } from "react";

import { useDatabase } from "../db/Database";

type UpdateDocResult = {
  isLoading: boolean;
  mutate: (data: DocumentData) => Promise<void>;
};

export default function useUpdateDoc(ref: DocumentReference): UpdateDocResult {
  const db = useDatabase();
  const [isLoading, setIsLoading] = useState(false);
  const mutate = useCallback(
    (data: DocumentData) => {
      setIsLoading(true);
      return db.updateDoc(ref, data);
    },
    [db, ref],
  );
  return { isLoading, mutate };
}
