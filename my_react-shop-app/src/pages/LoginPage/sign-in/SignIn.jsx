import { useNavigate } from "react-router-dom";
import Form from "../../../components/form/Form";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        // 리덕스에 유지 데이터 담는 로직
        navigate("/");
      })
      .catch((error) => {
        return (
          error && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.")
        );
      });
  };
  return (
    <Form
      title={"로그인"}
      getDataForm={handleLogin}
      firebaseError={firebaseError}
    />
  );
};

export default SignIn;
