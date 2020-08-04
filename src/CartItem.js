import React from 'react';

class CartItem extends React.Component {

  testing () {
    const promise = new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve('done');
      }, 5000);
    });

    promise.then( () => {
      //setState asrs like a synchronous call 
      this.setState( {   qty: 100} );

      console.log('state', this.state);
    });

  }

  increaseQuantity = () => {
    // this.state.Qty += 1;
    // console.log('this.state', this.state);
    // setState form 1 
    // this.setState({
    //   Qty: this.state.Qty + 1 
    // }, () => {
    // console.log('this.state', this.state);
    // });

    //setState form 2 - if previous state is required 
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1
      }
    });
  }
  decreaseQuantitiy = () => {
    const { qty } = this.state;
    if (qty === 0) {
      return;
    }
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1
      }
    });
  }
  render() {
    // console.log("this.props-->",this.props);
    const { title, price, qty } = this.props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: '#777' }}>{price}</div>
          <div style={{ color: '#777' }}>{qty}</div>
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
              onClick={this.decreaseQuantitiy}
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