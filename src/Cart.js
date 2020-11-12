import React from 'react';
import CartItem from './CartItem'

class Cart extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: '',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: '',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: '',
          id: 3
        }
      ]
    }
    //Can bind multiple event handlers can be bind over here 
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Hey plz increase the qty of this product', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      // products: products
      products
    })

  }
  handleDecreaseQuantity = (product) => {
    console.log('Hey plz decrease the quantity of this product', product);
    const {products} = this.state;
    const index = products.indexOf(product);
    
    // (products[index].qty > 0)? products[index].qty -= 1 : products[index].qty = 0 ;
    if(products[index].qty  === 0) {
      return ;
    }
    products[index].qty -= 1;

    this.setState(
      products
    );
  }
  handelDeleteQuantity = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id  );  // filter out the element with that id and return the filtered array 
    this.setState({
      products: items
    });
  }
  
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteQuantity={this.handelDeleteQuantity}
            />
          )
        })}
      </div>
    );
  }
}


export default Cart; 