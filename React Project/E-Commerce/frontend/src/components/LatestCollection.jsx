import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
export default function LatestCollection() {
    const { products } = useContext(ShopContext);
    console.log(products);
    return (
        <div></div>
    )
}
