export const getWishlist = () => {
  if (typeof window === "undefined") return [];

  return JSON.parse(localStorage.getItem("wishlist")) || [];
};

export const addToWishlist = (product) => {
  const wishlist = getWishlist();

  const exists = wishlist.find((item) => item.id === product.id);

  if (!exists) {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
};

export const removeFromWishlist = (id) => {
  const wishlist = getWishlist().filter((item) => item.id !== id);

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};
