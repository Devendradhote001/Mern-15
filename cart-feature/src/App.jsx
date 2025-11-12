import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

const App = () => {
  let productsArr = [
    {
      id: 1,
      productName: "Wireless Headphones",
      description:
        "Bluetooth headphones with noise cancellation, 20-hour battery life.",
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
      price: 2999,
    },
    {
      id: 2,
      productName: "Classic Wrist Watch",
      description: "Water-resistant analog wrist watch with leather strap.",
      image:
        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80",
      price: 2499,
    },
    {
      id: 3,
      productName: "Coffee Mug",
      description: "Ceramic mug with ergonomic handle; holds 350ml.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      price: 399,
    },
    {
      id: 4,
      productName: "Smartphone Stand",
      description: "Adjustable desktop stand compatible with all smartphones.",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
      price: 199,
    },
    {
      id: 5,
      productName: "LED Desk Lamp",
      description:
        "Dimmable LED lamp with touch control and USB charging port.",
      image:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      price: 1599,
    },
    {
      id: 6,
      productName: "Backpack Fjallraven",
      description:
        "Versatile backpack for daily use and walks in the forest. Has a padded sleeve for a 15-inch laptop.",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 109.95,
    },
    {
      id: 7,
      productName: "Slim Fit T-Shirt",
      description:
        "A comfortable, slim fit T-shirt made of 100% cotton. Suitable for casual wear.",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      price: 22.3,
    },
    {
      id: 8,
      productName: "Cotton Jacket",
      description:
        "Stylish cotton jacket for urban wear. Durable fabric and modern design.",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      price: 55.99,
    },
    {
      id: 9,
      productName: "Running Shoes",
      description:
        "Lightweight and comfortable running shoes. Perfect for daily exercise.",
      image: "https://fakestoreapi.com/img/71CmG6Zac4L._AC_UL640_QL65_.jpg",
      price: 65.0,
    },
    {
      id: 10,
      productName: "Classic Sunglasses",
      description:
        "Classic aviator sunglasses for men and women. Provides 100% UV protection.",
      image: "https://fakestoreapi.com/img/71MxF0SA3FL._AC_UL640_QL65_.jpg",
      price: 19.99,
    },
  ];

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartsItems, setCartsItems] = useState([]);

  return (
    <div className="h-screen">
      <Navbar setIsCartOpen={setIsCartOpen} />
      <div className="p-8 flex flex-wrap gap-5">
        {productsArr.map((elem) => {
          return (
            <ProductCard
              key={elem.id}
              elem={elem}
              setCartsItems={setCartsItems}
            />
          );
        })}
      </div>
      {isCartOpen ? <Cart cartsItems={cartsItems} /> : ""}
    </div>
  );
};

export default App;
