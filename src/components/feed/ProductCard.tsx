import React, { useEffect, useState } from 'react';
import { Item } from '../../types/item';
import './ProductCard.css';

interface ProductCardProps {
    product: Item;
    handleAddToBasket: (product: Item) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    product,
    handleAddToBasket,
}) => {
    const [productImage, setProductImage] = useState({
        imageSrc: '',
        imageAlt: '',
    });

    const handleProductImage = () => {
        return product.itemType === 'mug'
            ? setProductImage({
                  imageSrc:
                      'https://cdn.shopify.com/s/files/1/0324/0037/5941/products/Treemugcloseup_0a616bee-f46f-44b1-a878-907ab31090df_300x300.jpg?v=1623065398',
                  imageAlt: product.name,
              })
            : setProductImage({
                  imageSrc:
                      'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1e%2F86%2F1e86c77fb86afc19daad9acb5b39470e7bc5ca1f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
                  imageAlt: product.name,
              });
    };

    useEffect(() => {
        handleProductImage();
        //eslint-disable-next-line
    }, []);

    return (
        <div className="product-card">
            <div className="product-card-image">
                <span>
                    <img
                        width="100%"
                        height="100%"
                        src={productImage.imageSrc}
                        alt={productImage.imageAlt}
                    />
                </span>
            </div>
            <p className="product-card-price">₺ {product.price}</p>
            <p style={{ height: '40px' }}>{product.name}</p>
            <button onClick={() => handleAddToBasket(product)}>Add</button>
        </div>
    );
};

export default ProductCard;
