// Knowledge
// Object Property Shorthand
const name = "Yash";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "Warwick",
};
console.log(user);

// Object desctructuring
const product = {
  lable: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

const {
  lable: productLable = "Yash",
  price,
  stock,
  salePrice,
  rating = 5,
} = product;

console.log(productLable, price, stock, salePrice, rating);

const transaction = (type, { lable: newLable, stock }) => {
  console.log(type, newLable, stock);
};

transaction("order", product);
