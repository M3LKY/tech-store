import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [searchModal, setSearchModal] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let count = 0;
    let subTotal = 0;

    if (cartItems && cartItems.length > 0) {
      cartItems.forEach((item) => {
        count += item.quantity;
        subTotal += item.product.price * item.quantity;
      });
    }

    setCartCount(count);
    setCartSubTotal(subTotal);

    // Save cartItems to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    // Retrieve cartItems from localStorage on page load
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const handleAddToCart = (product, quantity) => {
    const existingItem = cartItems.find((item) => item.product.id === product.id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) => {
        if (item.product.id === product.id) {
          return {
            product: item.product,
            quantity: item.quantity + quantity
          };
        }
        return item;
      });

      setCartItems(updatedCart);
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        { product: product, quantity: quantity }
      ]);
    }

    setShowCart(true);
  };

  const handleRemoveFromCart = (product) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product.id !== product.id
    );
    setCartItems(updatedCartItems);
  };

  const handleCartProductQuantity = (type, product) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.product.id === product.id) {
        if (type === "inc") {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        } else if (type === "dec" && item.quantity !== 1) {
          return {
            ...item,
            quantity: item.quantity - 1
          };
        }
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        categories,
        setCategories,
        cartItems,
        setCartItems,
        handleAddToCart,
        cartCount,
        handleRemoveFromCart,
        showCart,
        setShowCart,
        handleCartProductQuantity,
        cartSubTotal,
        searchModal,
        setSearchModal
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
