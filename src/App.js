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
          products: products,
          // products,
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
    let items = [
      {
        img: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        price: 100,
        qty:  3,
        title: "Washing Machine"
      },
      {
        img: "https://images.unsplash.com/photo-1584191349568-e8162f3d55bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym13JTIweDZ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        price: 60000000,
        qty: 1,
        title: "Car"
      },
      {
        img: "https://images.unsplash.com/photo-1623114112815-74a4b9fe505d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        price: 10000,
        qty: 1,
        title: "Oven"
      },
      {
        img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        price: 200000,
        qty: 1,
        title: "Laptop"
      },
      {
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1rDH_nWadT1GXFPomdutqV1PUMA8uXIWS2Js5_fq4pJ1lwG16",
        price: Infinity,
        qty: 1/2,
        title: "Mark Zuckerberg"
      }
    ]
    var item = items[Math.floor(Math.random()*items.length)];
    this.db
      .collection('products')
      // .add({
      //   img: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      //   price: 100,
      //   qty:  3,
      //   title: "Washing Machine"
      // })
      .add( item  )
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
        <div style={{padding:10, fontSize:30}}>TOTAL: {this.getCartTotal()}</div>
        <button onClick={this.addProduct} style={{ padding:20, fontSize:20 }}>Add a Product</button>
        <Cart
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteQuantity={this.handelDeleteQuantity}
        />
        {/*  Conditional rendering  */}
        {loading && <h1>Loading Products...</h1>}    
      </div>
    );
  }
}

export default App;
