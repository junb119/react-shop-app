import { Link } from "react-router-dom";
import { useAppdispatch, useAppSelector } from "../../../../hooks/redux";
import styles from "./CardItem.module.scss";
import { addToCart } from "../../../../store/cart/cart.slice";
import { IProduct } from "../../../../store/products/products.type";
import { FC } from "react";

type CardItemProps = {
  item: IProduct
}
const Carditem : FC<CardItemProps> = ({ item }) => {
  const { products } = useAppSelector((state) => state.cartSlice);
  const productMatching = products.some((product) => product.id === item.id);
  //some 배열안의 요소중 판별함수를 하나라도 통과하면 true리턴
  
  const dispatch = useAppdispatch()
  
  const addItemToCart = ()=> {
    dispatch(addToCart(item))
  }
  return (
    <li className={styles.card_item}>
      <Link to={`/product/${item.id}`}>
        <img
          src={item.image}
          width={"80%"}
          height={"200px"}
          alt="product card"
        />
      </Link>
      <h5>{item.title.substring(0, 15)}...</h5>
      <div>
        <button disabled={productMatching} onClick={()=> !productMatching && addItemToCart()}>
          {productMatching ? "장바구니에 담긴 제품" : "장바구니에 담기"}
        </button>
        <p>${item.price}</p>
      </div>
    </li>
  );
};

export default Carditem;
