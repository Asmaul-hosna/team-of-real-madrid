import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    const totalSalary = cart.reduce( (sum,team) => sum + team.salary,0)
    
    

    return (
        <div>
            <h2>This is Cart:{cart.length}</h2>
            <p>total salary;{totalSalary}</p>
        </div>
    );
};

export default Cart;