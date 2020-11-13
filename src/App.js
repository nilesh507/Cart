import React from 'react';
import Navbar from './Navbar'
import Cart from './Cart'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 5000,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2204&q=80',
          id: 1
        },
        {
          price: 20000,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80',
          id: 2
        },
        {
          price: 80000,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
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

  getCartCount = () => {
    const { products } = this.state;
    
    let count = 0;

    products.forEach((product) => count += product.qty);

    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;

    let total = 0;
    products.forEach((item) => {
      total = total + item.qty * item.price;
    });
    return total;
  }
  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteQuantity={this.handelDeleteQuantity}
        />
        <div style={{padding:10, fontSize:30}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
