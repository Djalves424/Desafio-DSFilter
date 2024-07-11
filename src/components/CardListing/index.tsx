import "./styles.css";
import { ProductDTO } from "../../models/product";

type Props = {
  product: ProductDTO;
};

export default function CardListing({ product }: Props) {
  return (
    <div className="dsf-product dsf-container mb10 ">
      <p>{product.name}</p>
      <h1>{product.price.toFixed(2)}</h1>
    </div>
  );
}
