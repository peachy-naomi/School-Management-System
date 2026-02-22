import { useState, useEffect } from "react";

function Fetch(){

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            try{
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
            }
            catch(error){
                console.error(error);
            }
        }

        fetchProducts();

    }, []);

    return(

        <div className="container">

            <h1 className="title">Products</h1>

            <div className="products-grid">

                {products.map((product) => (

                    <div key={product.id} className="product-card">

                        <img 
                            src={product.image} 
                            alt={product.title}
                            className="product-image"
                        />

                        <h3 className="product-title">
                            {product.title}
                        </h3>

                        <p className="product-price">
                            ${product.price}
                        </p>

                        <p className="product-rating">
                            ⭐⭐ {product.rating.rate}  
                            ({product.rating.count} reviews)
                        </p>

                        <p className="product-category">
                            {product.category}
                        </p>

                        <p className="product-description">
                            {product.description}
                        </p>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default Fetch;