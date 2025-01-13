import { Link } from "react-router-dom";
import SignIn from "./sign-in/SignIn";

const LoginPage = () => {
  return (
    <div>
      <div>
        <h1>로그인</h1>
        <SignIn />
        <p>
          계정이 없습니까? <Link to="/register">가입하기</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
