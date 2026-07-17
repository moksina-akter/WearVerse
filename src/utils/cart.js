export const getCart = () => {
  if (typeof window === "undefined") return [];

  const cart = localStorage.getItem("cart");

  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const addToCart = (product, quantity = 1) => {
  const cart = getCart();

  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.push({
      ...product,
      quantity,
    });
  }

  saveCart(cart);
};

export const removeFromCart = (id) => {
  const cart = getCart().filter((item) => item.id !== id);

  saveCart(cart);
};

export const updateQuantity = (id, quantity) => {
  const cart = getCart().map((item) =>
    item.id === id ? { ...item, quantity } : item,
  );

  saveCart(cart);
};
