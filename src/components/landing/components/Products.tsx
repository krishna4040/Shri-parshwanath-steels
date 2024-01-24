import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Products = () => {

    const [products, setProducts] = useState([]);

    const fecthProducts = async () => {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        setProducts(data);
    }

    useEffect(() => {
        fecthProducts();
    }, []);

    return (
        <div>
            <div>
                <div>Latest Products</div>
                <div>More information you want to cover</div>
            </div>
            <div className='grid items-start grid-cols-2 grid-rows-2 gap-5 px-10 py-8 justify-items-center'>
                {
                    products.slice(0, 4).map((product: any) => {
                        return <ProductCard
                            key={product.id}
                            description={product.description}
                            image={product.image}
                            price={product.price}
                            title={product.title}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Products