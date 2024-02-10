const longRunningFn = () => {
    console.log("longRunning fn started");
    const duration = Date.now() + 3000;
    while (Date.now() <= duration) {

    }
    console.log("longRunningFn ended");
}

const anotherFn = () => {
    console.log("another fn loaded");
    longRunningFn();
}

const someFunction = () => {
    anotherFn();
}


const handleClick = () => {
    console.log("button clicked");
}


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("clickable").addEventListener("click", handleClick)
    longRunningFn();
    someFunction();
})