
let result = document.getElementById("result");


function display(val) {
    result.value += val;
    return val;
}

function solve() {

    let x = result.value;
    let y = eval(x);

    result.value = y;
    return y;
}


function clearScreen() {

    result.value = '';

}