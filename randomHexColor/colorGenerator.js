// selectors
const btnEl = document.querySelector("button");
const backgroundEl = document.querySelector(".main");


// code
const generateRandomColor = () => {
    // generating random Number
    const randomNumberHex = "#" + (Math.floor(Math.random() * 10000000)).toString(16);
    // console.log(randomNumberHex);

    backgroundEl.style.backgroundColor = randomNumberHex;  
}
btnEl.addEventListener("click" , generateRandomColor);



// this code is as same as these lines below
            // const randomNum = Math.floor(Math.random() * 10000000); //generating 6 digit random no.
            // console.log(randomNum);

            // const randomNumHex = randomNum.toString(16); //converting random number into HexCode 
            // console.log(randomNumHex); 

            // const finalHexValue = "#".concat(randomNumHex); //adding # in the start of HexCode
            // console.log(finalHexValue);


