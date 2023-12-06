const data1 = [
      {
        img: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        price: 100,
        qty: 3,
        title: "Washing Machine",
      },
      {
        img: "https://images.unsplash.com/photo-1584191349568-e8162f3d55bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym13JTIweDZ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        price: 30000,
        qty: 1,
        title: "Car",
      },
      {
        img: "https://images.unsplash.com/photo-1623114112815-74a4b9fe505d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        price: 500,
        qty: 1,
        title: "Oven",
      },
      {
        img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        price: 2500,
        qty: 1,
        title: "Laptop",
      },
      {
        img: "https://i.pinimg.com/736x/3f/4f/d0/3f4fd073d3e748c503c38e5a315d00c3.jpg",
        price: 99,
        qty: 1,
        title: "Mouse",
      },
      {
        img: "https://i.pinimg.com/564x/44/bc/d7/44bcd714309aa9f44bc55c3c00110830.jpg",
        price: 100,
        qty: 1,
        title: "Shoes",
      },
      {
        img: "https://i.pinimg.com/564x/f4/51/73/f45173b4b3c1283a9524e8da06d150a3.jpg",
        price: 500,
        qty: 1,
        title: "Monitor",
      },
      {
        img: "https://i.pinimg.com/564x/41/db/a4/41dba438abe65e730db76815df2444fd.jpg",
        price: 150,
        qty: 1,
        title: "Perfume",
      },
      {
        img: "https://i.pinimg.com/564x/02/46/a0/0246a054a966951fefda5bbb785afe82.jpg",
        price: 80,
        qty: 1,
        title: "Coffee Machine",
      },
      {
        img: "https://i.pinimg.com/564x/00/22/a9/0022a9eb283ba672c92cdc2db32de556.jpg",
        price: 400,
        qty: 1,
        title: "Watch",
      },
      {
        img: "https://i.pinimg.com/564x/4a/d8/ad/4ad8ad9edf0231341ee4bec3ff7cb414.jpg",
        price: 599,
        qty: 1,
        title: "Head Phones",
      },
      {
        img: "https://i.pinimg.com/564x/cf/d6/7c/cfd67cf1c0bb1c311b185c144dd211b6.jpg",
        price: 500,
        qty: 1,
        title: "PS5",
      },
      
];

// (()=>{
//   const url = "https://fakestoreapi.com/products"
//   fetch(url)
//   .then(res=>res.json())
//   .then(
//     (res)=>{
//       console.log(res)
//       const extractedProperties = res.map(item => ({
//         img: item.image,
//         title: item.title, 
//         price: item.price,
//         qty:1
//       }));
//       const data = [...data1, ...extractedProperties]
//       console.log("Extracted data:-->",data)
//     }
//   ).catch(err=> console.log(err))
// })();

export const fetchData = async () => {
  try {
    const url = "https://fakestoreapi.com/products";
    const response = await fetch(url);
    const res = await response.json();
    const extractedProperties = res.map(item => ({
      img: item.image,
      title: item.title,
      price: item.price,
      qty: 1
    }));
    return [...data1, ...extractedProperties];
  } catch (err) {
    console.error(err);
  }
};

// fetchData().then(data=>{
//   return data;
// })


export default fetchData;