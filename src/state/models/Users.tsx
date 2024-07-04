import { FirestoreDataConverter } from "firebase/firestore";
import { DateTime } from "luxon";

type Starter = {
  name: string;
  reminder: DateTime;
  repeatInterval: boolean;
};

export class UserDocument {
  id: string;
  uid: string;
  starters: Starter[];
  createdAt: DateTime;
  updatedAt: DateTime;

  constructor(
    uid: string,
    id: string,
    starters = [],
    createdAt?: string,
    updatedAt?: string,
  ) {
    this.id = id;
    this.uid = uid;
    this.starters = starters;
    this.createdAt = createdAt ? DateTime.fromISO(createdAt) : DateTime.now();
    this.updatedAt = updatedAt ? DateTime.fromISO(updatedAt) : DateTime.now();
  }
}

export const CollectionKey = "users";

export const converter: FirestoreDataConverter<UserDocument> = {
  toFirestore: (data: UserDocument) => {
    return {
      id: data.id,
      uid: data.uid,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new UserDocument(data.uid, data.id, data.createdAt, data.updatedAt);
  },
};
