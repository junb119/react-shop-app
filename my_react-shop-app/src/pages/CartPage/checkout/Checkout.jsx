import { useEffect } from "react";
import { useAppdispatch, useAppSelector } from "../../../hooks/redux";
import { getTotalPrice } from "../../../store/cart/cart.slice";
import { Link } from "react-router-dom";
import styles from "./Checkout.module.scss";
import { useAuth } from "../../../hooks/useAuth";
const Checkout = () => {
  const cart = useAppSelector((state) => state.cartSlice);
  const dispatch = useAppdispatch();

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [cart]);

  const { isAuth } = useAuth();
  return (
    <div className={styles.checkout}>
      <div>
        <p>
          {" "}
          <span>합계 : </span> ${cart.totalPrice.toFixed(2)}
        </p>
        {isAuth ? (
          <button
            className={styles.checkout_button}
            // onClick={() => sendOrder()}
          >
            계산하기
          </button>
        ) : (
          <Link className={styles.checkout_button} to={"/login"}>
            로그인
          </Link>
        )}
      </div>
    </div>
  );
};

export default Checkout;
