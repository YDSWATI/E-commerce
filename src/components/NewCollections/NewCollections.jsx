import React from "react";
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from "../item/item";
const NewCollections = () =>{
    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
            {new_collection.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
            image={item.image}
          />
        ))}
            </div>
        </div>
    )
}
export default NewCollections