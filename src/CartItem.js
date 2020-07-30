import React from 'react';

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            Qty: 1,
            img: ''
        }
        //Can bind multiple event handlers can be bind over here 
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        console.log('this.state', this.state);
    }
  render () {
    const {title, price, Qty} = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image}  />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>{price}</div>
          <div style={ { color: '#777' } }>{Qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img 
                alt="increase" 
                className="action-icons" 
                src="https://image.flaticon.com/icons/png/512/3114/3114793.png"
                onClick={this.increaseQuantity} 
            />
            <img 
                alt="decrease" 
                className="action-icons" 
                src="https://www.flaticon.com/premium-icon/icons/svg/3114/3114894.svg" 
            />
            <img 
                alt="delete" 
                className="action-icons" 
                src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
            />

          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;