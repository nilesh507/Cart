import React from 'react';

class CartItem extends React.Component {
  render() {
    // console.log('this.props', this.props);
    const { title, price, qty } = this.props.product;       //Object destructuring \
    const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteQuantity} = this.props;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title} </div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://image.flaticon.com/icons/png/512/3114/3114793.png"
              onClick={() => onIncreaseQuantity(product) }
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://www.flaticon.com/premium-icon/icons/svg/3114/3114894.svg"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
              onClick= {() => onDeleteQuantity(product.id)}
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