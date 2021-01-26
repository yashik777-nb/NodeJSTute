const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve([7, 4, 1]), 2000);
  //   setTimeout(() => reject("This is error"), 2000);
});

doWorkPromise
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
