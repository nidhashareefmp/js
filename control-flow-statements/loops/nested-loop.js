for(let i = 0; i <= 5; i++){ //this code only displays the row
    let row = "";

    for(let j = 1; j <= i; j++){
      row += "*";    //number +1
    }
    console.log(row);
    
}

//---pyramid---

for (let i = 1; i <= 5; i++) {
    let row = "";

    // add spaces (for centering)
    for (let j = 1; j <= 5 - i; j++) {
        row += " ";
    }

    // add stars (2*i - 1 stars in each row)
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }

    console.log(row);
}