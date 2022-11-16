const txtArea = document.querySelector(".txtarea");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

const url = "https://api.funtranslations.com/translate/yoda.json";

function getUrl(text){
    return (url + "?" + "text=" + text);
}

function showError(err){
    console.log(err);
    alert("Server is busy, please try again later!");
}

function translate(){
    const text = txtArea.value;
    const serverUrl = getUrl(text);

    fetch(serverUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        output.innerText = data.contents.translated;
    })
    .catch(showError)
}

btn.addEventListener("click", translate);
