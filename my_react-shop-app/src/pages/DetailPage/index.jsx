import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../store/products/product.slice";
import { useAppdispatch } from "../../hooks/redux";

const DetailPage = () => {
  const { id } = useParams();
  const productId = Number(id);
  const dispatch = useAppdispatch();

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId]);

  return <div className="page">DetailPage</div>;
};

export default DetailPage;
