import { useEffect } from "react";
import { useAppdispatch, useAppSelector } from "../../../hooks/redux";
import { useAuth } from "../../../hooks/useAuth";
import { fetchOrder } from "../../../store/order/order.slice";
import CartEmpty from "../../../components/cart-empty/CartEmpty";
import OrderItem from "./order-item/OrderItem";
import styles from "./OrdersList.module.scss";
const OrderList = () => {
  const { id } = useAuth();
  const { order } = useAppSelector((state) => state.orderSlice);
  const dispatch = useAppdispatch();
  useEffect(() => {
    dispatch(fetchOrder(id));
  }, [id]);

  if (!order.length) return <CartEmpty title={"주문 내역"} />;

  return (
    <div className={styles.orders}>
      {order.map((item) => (
        <div key={item.id}>
          <div className={styles.order_header}>
            <h3>주문 번호_{item.id}</h3>
            <p> 합계: $ {item.totalPrice.toFixed(2)}</p>
          </div>
          <ul className={styles.orders_list}>
            {item.products.map((order) => (
              <OrderItem key={order.id} order={order} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
