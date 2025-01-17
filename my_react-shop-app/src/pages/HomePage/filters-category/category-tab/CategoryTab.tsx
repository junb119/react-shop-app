import { FC, useEffect } from "react";
import { useAppdispatch, useAppSelector } from "../../../../hooks/redux";
import { setActiveCategory } from "../../../../store/categories/categories.slice";
import styles from "./CategoryTab.module.scss";
import { CategoriesName } from "../../../../store/categories/categories.type";

type CategoryTabProps = {
  text: string;
  categoryName: CategoriesName;
}
const CategoryTab:FC<CategoryTabProps> = ({ text, categoryName }) => {
  const dispatch = useAppdispatch();
  const category = useAppSelector((state) => state.categoriesSlice);

  
  const getActiveCategory = () => {
    dispatch(setActiveCategory(categoryName));
  };
  return (
    <button
      className={
        categoryName === category
          ? styles.active_category
          : styles.category_button
      }
      onClick={getActiveCategory}
    >
      {text}
    </button>
  );
};

export default CategoryTab;
