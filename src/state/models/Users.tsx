import {
  FirestoreDataConverter,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import { DateTime } from "luxon";

export type FirestoreStarter = {
  id: string;
  name: string;
  reminder: number;
  repeatInterval: boolean;
};

export type Starter = {
  id: string;
  name: string;
  reminder: DateTime;
  repeatInterval: boolean;
};

export class UserDocument {
  id: string;
  uid: string;
  starters: Starter[];

  createdAt?: DateTime;
  updatedAt?: DateTime;

  constructor(
    uid: string,
    id: string,
    starters: FirestoreStarter[] = [],
    createdAt?: DateTime,
    updatedAt?: DateTime,
  ) {
    this.id = id;
    this.uid = uid;

    this.starters = starters.map(s => ({
      ...s,
      reminder: DateTime.fromMillis(s.reminder),
    }));

    if (createdAt) {
      this.createdAt = createdAt;
    }

    if (updatedAt) {
      this.updatedAt = updatedAt;
    }
  }
}

export const CollectionKey = "users";

export const converter: FirestoreDataConverter<UserDocument> = {
  toFirestore: (data: UserDocument) => {
    return {
      id: data.id,
      uid: data.uid,
      staters: data.starters.map(s => ({
        ...s,
        reminder: s.reminder.toMillis(),
      })),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data({ ...options, serverTimestamps: "estimate" });

    const createdAt = DateTime.fromMillis(
      (data.createdAt as Timestamp).toMillis(),
    );

    const updatedAt = DateTime.fromMillis(
      (data.updatedAt as Timestamp).toMillis(),
    );

    return new UserDocument(
      data.uid,
      data.id,
      data.starters,
      createdAt,
      updatedAt,
    );
  },
};
