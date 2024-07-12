import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import EmptyListView from "./EmptyListView";
import SingleStarterView from "./SingleStarterView";
import { useAuth } from "../../auth/AuthProvider";
import { UserDocument } from "../../state/models/Users";
import useCreateUser from "../../state/mutations/useCreateUser";
import useGetUser from "../../state/queries/useGetUser";
import paths from "../paths";

interface CreateUserProps {
  uid: string;
  create: (data: UserDocument) => Promise<UserDocument>;
}

function CreateUser(props: CreateUserProps) {
  useEffect(() => {
    props
      .create(new UserDocument(props.uid, uuid()))
      .catch(err => console.log(err));
  }, []);
  return <div>creating user</div>;
}

export default function HomeView() {
  const auth = useAuth();
  const uid = auth.user?.uid ?? "";

  const user = useGetUser(uid);
  const create = useCreateUser(uid);

  if (user.isLoading) {
    return <div>Loading</div>;
  }

  if (!user.data) {
    return <CreateUser uid={uid} create={create.mutate} />;
  }

  if (!auth.user) {
    return <Navigate to={paths.Authenticate} />;
  }

  if (user.data.starters.length === 0) {
    return <EmptyListView uid={uid} />;
  }

  if (user.data.starters.length === 1) {
    return <SingleStarterView uid={uid} starter={user.data.starters[0]} />;
  }

  return <div>Hello {user.data.uid} </div>;
}
