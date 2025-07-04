import React from 'react'

import './DescriptionBox.css'

const DescriptionBox = ()=>{
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box-fade">Reviews</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                E-commerce, put simply, is the practice of buying and selling goods or services using the Internet. It has gained immense popularity as a way of doing business because it's convenient and accessible at the same time. Instead of a physical store where the products to be sold are generally displayed, e-commerce businesses have virtual storefronts where customers can browse and purchase products or services online itself.
                </p>
                <p>
                Designing a successful e-commerce website involves several key steps, from understanding your target audience and defining your goals to choosing the right platform and creating a user-friendly experience. This process includes platform selection, website design, product page optimization, payment and shipping setup, and ongoing marketing 
                </p>
            </div>

        </div>
    )
}
export default DescriptionBox;