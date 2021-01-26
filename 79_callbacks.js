const doWorkCallback = (callback) => {
  // setTimeout(() => callback("This is my Error"), 1000);
  setTimeout(() => callback(undefined, [1, 2, 3]), 1000);
};

doWorkCallback((error, result) => {
  if (error) return console.log(error);
  console.log(result);
});
