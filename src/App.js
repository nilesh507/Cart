import React from 'react';
import Navbar from './Navbar'
import Cart from './Cart'
import firebase from 'firebase'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: "true"
    };
    this.db = firebase.firestore();
    
    //Can bind multiple event handlers can be bind over here 
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  componentDidMount () {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);
        
    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //       return "";
    //     })

    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();

    //       data['id'] = doc.id;
    //       return data;
    //     });
  
    //     this.setState({
    //       // products: products
    //       products,
    //       loading: false
    //     });
        
    //     return "";
    //   })

    this.db
      .collection('products')
      // .where('price', "==", 999)
      // .where('title', "==", "Watch")
      .orderBy('price', "asc")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        
        snapshot.docs.map((doc) => {
          console.log(doc.data());
          return "";
        })

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();

          data['id'] = doc.id;
          return data;
        });
  
        this.setState({
          // products: products
          products,
          loading: false
        });
        
        return "";
      });

      
  }
  handleIncreaseQuantity = (product) => {
    console.log('Hey plz increase the qty of this product', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //   // products: products
    //   products
    // })
    
    //updating products in the firebase 
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(() => {
        console.log("Document updated successfully");
      })
      .catch((error) => {
        console.log("Error : ", error)
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
    // products[index].qty -= 1;

    // this.setState(
    //   products
    // );

    //updating product quantity in the firebase 
    const docRef = this.db.collection("products").doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(() => {
        console.log("Document updated successfully");
      })
      .catch((error)=> {
        console.log("Error : ", error);
      })
  }
  handelDeleteQuantity = (id) => {
    const {products} = this.state;
    // const items = products.filter((item) => item.id !== id  );  // filter out the element with that id and return the filtered array 
    // this.setState({
    //   products: items
    // });

    const docRef = this.db.collection("products").doc(id);
    docRef
      .delete()
      .then(() => {
        console.log("Document Deleted successfully");
      })
      .catch((error)=> {
        console.log("Error : ", error);
      })
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

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img: "",
        price: 100,
        qty:  3,
        title: "Washing Machine"
      })
      .then((docRef)=> {
        console.log("Product has been added",docRef);
      }).catch((error)=> {
        console.log("Error : ", error);
      })
      
  }

  render () {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{ padding:20, fontSize:20 }}>Add a Product</button> */}
        <Cart
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteQuantity={this.handelDeleteQuantity}
        />
        {/*  Conditional rendering  */}
        {loading && <h1>Loading Products...</h1>}    
        <div style={{padding:10, fontSize:30}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
