import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    const totalSalary= cart.reduce((sum,player) => sum + player.salary,0);
    console.log(cart);
   
    
    return (
        <div className='cart'>
            <h4>players selected:{cart.length}</h4>
            <h5>total Price ($):{totalSalary}</h5>
            <h6>Added player:{cart.length}</h6>
            <ol>
                {
                    cart.map(player => <li>{player.name}</li>)
                }
                </ol>
            
        </div>
    );
};

export default Cart;