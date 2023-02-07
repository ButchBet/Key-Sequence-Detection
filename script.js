const resultList = document.getElementById("result");
const resultItems = document.getElementsByClassName("result__item");
const button = document.getElementById("button");

let resultStorage = [];
const result = "wesbos";
let valiationInterval = null;

button.addEventListener("click", checkResultStorage);
window.addEventListener("keyup", changeResultStorage);

function checkResultStorage() {
    clearInterval(valiationInterval);

    if(resultStorage.join("").includes(result)) {

        resultList.classList.add("correct");
        
        
    } else {
        resultList.classList.add("wrong");
    }
    
    valiationInterval = setInterval(() => {
        resultList.classList.remove("correct");
        resultList.classList.remove("wrong");
    }, 1000);
}

function changeResultStorage(e) {
    if(e.key == "Enter" || e.key == " ") {
        checkResultStorage();
    } else {
        resultStorage.push(e.key);   
        
        resultStorage.splice(-result.length - 1, resultStorage.length - result.length);
    
        fillResultList();
    }
}

function fillResultList() {
    for(let i = resultItems.length - 1, k = resultStorage.length - 1;  i > resultItems.length - resultStorage.length - 1; i--, k--) {
        resultItems[i].textContent = resultStorage[k];
    }
}