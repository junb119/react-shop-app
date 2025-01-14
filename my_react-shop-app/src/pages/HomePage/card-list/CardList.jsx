import { useEffect } from "react";
import { useAppdispatch, useAppSelector } from "../../../hooks/redux";
import Carditem from "./card-item/Carditem";
import styles from "./CardList.module.scss";
import { fetchProducts } from "../../../store/products/products.slice";
const CardList = () => {
  const dispatch = useAppdispatch();
  const { products } = useAppSelector((state) => state.productsSlice);
  const category = useAppSelector((state) => state.categoriesSlice);

  useEffect(() => {
    dispatch(fetchProducts(category?.toLowerCase()));
  }, [category]);

  return (
    <ul className={styles.card_list}>
      {products.map((item) => (
        <Carditem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CardList;
