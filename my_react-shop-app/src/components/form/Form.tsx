import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import { FC } from "react";
type FormProps = {
  title: string;
  getDataForm: (email: string, password: string) => void;
  firebaseError: string;
};
type Inputs = {
  email: string;
  password: string;
};

const Form: FC<FormProps> = ({ title, getDataForm, firebaseError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<FieldValues> = ({ email, password }) => {
    getDataForm(email, password);
    reset();
  };
  const userPassword = {
    required: "필수 필드입니다.",
    minLength: {
      value: 6,
      message: "최소 6자입니다.",
    },
    maxLength: {
      value: 13,
      message: "최대 13자입니다.",
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm,
      message: "최소 8자, 영문 1자, 숫자 1자.",
    },
  };
  const userEmail = {
    required: "필수 필드입니다.",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm,
      message: "입력하신 이메일 주소가 올바르지 않습니다.",
    },
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="email"
          placeholder="E-mail"
          {...register("email", userEmail)}
        />
        {errors?.email && (
          <div>
            <span className={styles.form_error}>{errors?.email?.message}</span>
          </div>
        )}
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password", userPassword)}
        />
        {errors?.password && (
          <div>
            <span className={styles.form_error}>
              {errors?.password?.message}
            </span>
          </div>
        )}
      </div>
      <button type="submit">{title}</button>
      {firebaseError && (
        <span className={styles.form_error}>{firebaseError}</span>
      )}
    </form>
  );
};

export default Form;
