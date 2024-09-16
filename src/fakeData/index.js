import products from "./products.JSON";

// Shuffle function
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Log the original products data
//console.log("Original Products:", products);

// Shuffle the products data
const fakeData = shuffle([...products]);

// Log the shuffled data
//console.log("Shuffled Products:", fakeData);

// Export the shuffled data
export default fakeData;
