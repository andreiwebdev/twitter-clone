import type { NextPage } from "next";
import { FcGoogle } from "react-icons/fc";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import { addUser } from "../store/user-slice";

const Login: NextPage = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const dispatch = useDispatch();

  if (loading) {
    return <div>loading...</div>;
  }

  if (user) {
    router.push("/home");
  }

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(
      result.user,
      result.user.displayName,
      result.user.photoURL,
      result.user.uid
    );
    dispatch(
      addUser({
        id: result.user.uid,
        fullName: result.user.displayName,
        profileImageURL: result.user.photoURL,
      })
    );
  };

  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen h-screen overflow-hidden flex flex-col items-center justify-center">
      <h1 className="mb-5">Welcome to my Twitter Clone</h1>
      <button
        onClick={signIn}
        className="flex items-center border p-3 border-gray-400"
      >
        Sign in with Google <FcGoogle className="w-5 h-5 ml-3" />
      </button>
    </div>
  );
};

export default Login;
