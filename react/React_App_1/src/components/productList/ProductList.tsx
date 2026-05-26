import { useState } from "react";
import productsArr from "./product_data.ts";
import Select from "react-select";

export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = selectedProduct
    ? productsArr.filter(product => product.id === selectedProduct.value)
    : productsArr;

  return (
    <div className="container mt-3">
      <h3 className="text-center mb-4">Product List</h3>

      <div className="row mb-4">
        <div className="col-sm-6 offset-3">
          <Select
            placeholder="Search Product..."
            isClearable
            value={selectedProduct}
            onChange={setSelectedProduct}
            options={productsArr.map(product => ({
              value: product.id,
              label: product.title
            }))}
          />
        </div>
      </div>

      <div className="row">
        {filteredProducts.map(product => (
          <div className="col-sm-3 mb-4" key={product.id}>
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt="" height="200"/>
              <div className="card-body">
                <p className="text-truncate">{product.category}</p>
                <p className="text-truncate">{product.title}</p>
                <p className="text-truncate">{product.description}</p>
                <p className="text-truncate">₹ {product.price}</p>
                <p className="text-truncate">Rating : {product.rating.rate}</p>
                <button className="btn btn-primary">details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}