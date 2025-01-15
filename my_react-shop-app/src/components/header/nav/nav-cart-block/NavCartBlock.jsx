import { useEffect } from "react";
import { useAppdispatch, useAppSelector } from "../../../../hooks/redux";
import { getTotalPrice } from "../../../../store/cart/cart.slice";
import { Link } from "react-router-dom";
import styles from "./NavCartBlock.module.scss";
import NavCartList from "./nav-cart-list/NavCartList";
const NavCartBlock = () => {
  const { totalPrice, products } = useAppSelector((state) => state.cartSlice);
  const dispatch = useAppdispatch();

  useEffect(() => {
    dispatch(getTotalPrice(products));
  }, [products]);

  return (
    <div className={styles.nav_cart_block}>
      <NavCartList />
      <div className={styles.nav_cart_price}>
        <p>합계 : ${totalPrice.toFixed(2)}</p>
      </div>
      <div className={styles.nav_cart_link}>
        <Link to={"cart"}>장바구니로 이동</Link>
      </div>
    </div>
  );
};

export default NavCartBlock;
