import React from 'react'
import './RelatedProduct.css'
import data_product from '../Assets/data'
import Item from "../item/item";
const RelatedProduct = () =>{
    return (
        <div className="relatedproducts">
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {
                data_product.map((item, index) =>{
                    return <Item
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    new_price={item.new_price}
                    old_price={item.old_price}
                    image={item.image}
                  />
                })
            }

        </div>
        </div>

    )
}
export default RelatedProduct