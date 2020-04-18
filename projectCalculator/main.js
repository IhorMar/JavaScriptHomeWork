let resField = document.getElementById("inputText");
let inpBut = document.querySelectorAll("input");
let arr = [];
let newArr = []
let symbols = ['+', '-', '/', '*'];
let counter = 0;



function clickButton(inpBut) {
    for (let index = 1; index < inpBut.length; index++) {
        inpBut[index].onclick = function() {
            res = inpBut[index].value;
            if (counter == 0 && res == "0") {
                alert("Enter a number greater than zero!")

            } else {

                resField.value += res
                arr.push(resField.value)
                counter += 1
                for (let index = 0; index < symbols.length; index++) {
                    if (res == symbols[index]) {
                        newArr.push(arr[counter - 2])
                        newArr.push(res)
                    }
                }

                if (res == "=") {
                    let lastFigure = arr[counter - 2].split(res)
                    resField.value = eval(lastFigure[0])
                }

                if (res == document.getElementById("buttonTopDel").value) {
                    resField.value = "";
                    counter = 0;
                    arr = [];
                    newArr = []
                }

                if (res == document.getElementById("buttonTopC").value) {
                    console.log(arr[counter - 2]);
                    console.log(arr[counter - 1]);
                    let b = arr[counter - 1].slice(0, -2)
                    resField.value = arr[counter - 1].slice(0, -2)
                    console.log(b);
                }
            }

        }
    }
}
clickButton(inpBut);