import { useSearchParams } from "react-router-dom";

function ProductDetails() {
    const [searchParams] = useSearchParams();

    const id = searchParams.get("id");
    const title = searchParams.get("title");
    const price = searchParams.get("price");
    const category = searchParams.get("category");
    return (
        <>
            <h2>Product Details</h2>

            <p>Id : {id}</p>
            <p>category : {category}</p>
            <p>Title : {title}</p>
            <p>Price : {price}</p>
        </>
    );
}
export default ProductDetails;