import {
  type User,
  signInAnonymously as _signInAnonymously,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useFirebase } from "../firebase/Firebase";

type Auth = {
  isReady: boolean;
  user: User | null;
  signInWithGoogle(): void;
  signInAnonymously(): void;
};

// @ts-expect-error shortcut to initial state
const Context = createContext<Auth>({});

export default function AuthProvider() {
  const { auth } = useFirebase();

  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);

  const signInWithGoogle = useCallback(() => {
    return signInWithPopup(auth, new GoogleAuthProvider());
  }, [auth]);

  const signInAnonymously = useCallback(() => {
    return _signInAnonymously(auth);
  }, [auth]);

  useEffect(() => {
    auth.onAuthStateChanged(u => {
      setIsReady(true);
      setUser(u);
    });
  }, [auth]);

  const value = useMemo<Auth>(
    () => ({
      isReady,
      user,
      signInAnonymously,
      signInWithGoogle,
    }),
    [isReady, user, signInAnonymously, signInWithGoogle],
  );

  return <Context.Provider value={value}></Context.Provider>;
}

export function useAuth() {
  return useContext(Context);
}
