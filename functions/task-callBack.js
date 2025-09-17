function square(num, callback) {
  let result = num * num;
  callback(result);
}

square(5, function(result) {
  console.log("Square is:", result); // 25
});
