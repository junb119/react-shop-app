import { useAppSelector } from "./redux";

export function useAuth() {
  const { id, email, token } = useAppSelector((state) => state.userSlice);
  return {
    isAuth: !!email, // email은 문자열 !email은 false, !!email은 true
    email,
    id,
    token,
  };
}
