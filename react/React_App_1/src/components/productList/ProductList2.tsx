import { useState } from 'react';
import productArr from './product_data';

export default function ProductList2() {
  const [products,setProducts] = useState(productArr);

  const sortAsc =()=>{
    const sortedData = productArr.sort((p1,p2)=>p1.price-p2.price);
    setProducts([...sortedData]);
  }
  const sortDesc =()=>{
    const sortedData = productArr.sort((p1,p2)=>p2.price-p1.price);
    setProducts([...sortedData]);
  }

  const filterProducts = (event: any )=>{
    const searchText = event.target.value;
    const filteredData = productArr.filter(product=>{
        return product.title.toLowerCase().includes(searchText.toLowerCase());
    })
    setProducts([...filteredData]);
  }

  return <>
    <h3 className="text-center">Product List</h3>
    <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-2">
                <input className='form-control' type="search" onChange={filterProducts}
                  placeholder='search...' />
            </div>
            <div className="col-sm-3">
                <button className="btn btn-primary" onClick={sortAsc}>Sort Asc</button>
                <button className="btn btn-secondary mx-1" onClick={sortDesc}>Sort Desc</button>
            </div>
        </div>
        <div className="row mt-3">
            {products.map(product=>{
                return <div className='col-sm-3' key={product.id}>
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
            })}
        </div>
    </div>
  </>
}
