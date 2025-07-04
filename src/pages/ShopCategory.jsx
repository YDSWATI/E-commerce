import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from "../components/item/item";
import all_product from '../components/Assets/all_product';


const ShopCategory = (props) => {
  const context = useContext(ShopContext);

  if (!context) {
    return <div>Loading products...</div>; // Optional fallback
  }

  const { all_products } = context;

  return (
    <div className="shop-category">
      <img className='shopcategory-banner'src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 </span> out of 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
      {all_products.map((item) => {
  if (props.category === item.category) {
    return (
      <Item
        key={item.id}
        id={item.id}
        name={item.name}
        new_price={item.new_price}
        old_price={item.old_price}
        image={item.image}
      />
    );
  }
  return null;
})}

      </div>

      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  );
};


// const ShopCategory = (props) => {
//     return (
//       <div className="shop-category">
//         <img src={props.banner} alt="" />
//         <div className="shopcategory-indexSort">
//           <p>
//             <span>Showing 1-12 </span> out of 36 Products
//           </p>
//           <div className="shopcategory-sort">
//             Sort by <img src={dropdown_icon} alt="" />
//           </div>
//         </div>
  
//         <div className="shopcategory-products">
//           {all_product.map((item) => {
//             if (props.category === item.category) {
//               return (
//                 <Item
//                   key={item.id}
//                   id={item.id}
//                   name={item.name}
//                   new_price={item.new_price}
//                   old_price={item.old_price}
//                   image={item.image}
//                 />
//               );
//             }
//             return null;
//           })}
//         </div>
//       </div>
//     );
//   };
  

export default ShopCategory;

