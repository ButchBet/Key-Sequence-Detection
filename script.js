const resultItems = document.getElementsByClassName("result__item");
const button = document.getElementById("button");

let resultStorage = [];
const result = "wesbos";

button.addEventListener("click", checkResult);
window.addEventListener("keyup", changeResult);

function checkResult() {
    if(resultStorage.join("").includes(result)) {
        console.log("Yes!");
        cornify_add();
    }
}

function changeResult(e) {
    resultStorage.push(e.key);   
    
    resultStorage.splice(-result.length - 1, resultStorage.length - result.length);

    checkResult();
}