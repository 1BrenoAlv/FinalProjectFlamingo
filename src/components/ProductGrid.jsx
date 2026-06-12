import React from 'react'
import ProductCard from './ProductCard'

const ProductGrid = ({ products }) => {
    return (
        <div className="row g-4">
            {products.map((product) => (
                <div key={product.id} className="col-12 col-sm-6 col-lg-4">
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    )
}

export default ProductGrid
