function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false; // change to false to test error
      if (success) {
        resolve("Data loaded!");
      } else {
        reject("Something went wrong!");
      }
    }, 2000);
  });
}

async function getData() {
  console.log("start");
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error("Error caught:", error);
  }
  console.log("end");
}

getData();
