import { useEffect } from "react";
import { useAppdispatch, useAppSelector } from "../../../hooks/redux";
import Carditem from "./card-item/Carditem";
import styles from "./CardList.module.scss";
import { fetchProducts } from "../../../store/products/products.slice";
import CardSkeleton from "../card-skeleton/CardSkeleton";
const CardList = () => {
  const dispatch = useAppdispatch();
  const { products, isLoading } = useAppSelector(
    (state) => state.productsSlice
  );
  const category = useAppSelector((state) => state.categoriesSlice);

  useEffect(() => {
    dispatch(fetchProducts(category?.toLowerCase()));
  }, [category]);

  if (isLoading) return <CardSkeleton />;
  return (
    <ul className={styles.card_list}>
      {products.map((item) => (
        <Carditem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CardList;
