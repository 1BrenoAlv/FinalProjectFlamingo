import React from 'react'

const ProductCard = ({ product }) => {
    const formatPrice = (price) =>
        price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    return (
        <div className="card h-100 shadow-sm">
            <img src={product.imageUrl} className="card-img-top" alt={product.title} style={{ height: 180, objectFit: 'cover' }} />
            <div className="card-body d-flex flex-column">
                <span className="badge bg-info text-dark mb-2">{product.tag}</span>
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted" style={{ flexGrow: 1 }}>{product.description}</p>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-3">
                    <strong className="text-success">{formatPrice(product.price)}</strong>
                    <button className="btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
