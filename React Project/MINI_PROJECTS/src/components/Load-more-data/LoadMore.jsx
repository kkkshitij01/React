import "./style.css";
import { useEffect, useState } from "react"

export default function LoadMore() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);
    async function fetchProduct() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`)
            const result = await response.json();
            if (result && result.products && result.products.length) {
                console.log(result);
                setProducts((prev) => [...prev, ...result.products]);
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
            setLoading(false);

        }
    }
    useEffect(() => {
        fetchProduct();
    }, [count])

    useEffect(() => {
        if (products && products.length >= 100) {
            setDisableButton(true);
        }

    }, [products])
    return (
        <div className="load-more-container">
            <div className="product-container">
                {
                    products && products.length ?
                        products.map((product) =>
                            <div key={product.id} className="product">
                                <img src={product.thumbnail} alt={product.title} />
                            </div>
                        )
                        : null
                }
            </div>

            {/* {loading && <div className="loading">Loading...</div>} */}


            <div className="load-more-button-container">

                <button disabled={disableButton || loading} className="btn" onClick={() => setCount(count + 1)}>
                    {
                        !disableButton ? !loading ? "Load More" : "Loading..." : "No More Product"
                    }
                </button>
            </div>

        </div>
    )
}