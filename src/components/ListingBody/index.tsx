import "./styles.css";
import CardFilter from "../CardFilter";
import CardListing from "../CardListing";
import * as productService from "../../services/product-service";
import { ProductDTO } from "../../models/product";
import { useContext, useState } from "react";
import { ContextProductCount } from "../../utils/context-product";

export default function ListingBody() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const { setContextProductCount } = useContext(ContextProductCount);

  function handleFilterProducts(minValue: number, maxValue: number) {
    const filterProducts = productService.findByPrice(minValue, maxValue);
    setProducts(filterProducts);
    setContextProductCount(filterProducts.length);
  }

  return (
    <>
      <main>
        <section>
          <CardFilter onFilter={handleFilterProducts} />

          <div className="dsf-container card-container mt20 mb10">
            {products.map((product) => (
              <CardListing key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
