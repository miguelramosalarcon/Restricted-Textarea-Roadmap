let textArea = document.getElementById("text-area");
let result = document.getElementById("result");
const limit = 250;

result.textContent = "0/" + limit;

textArea.addEventListener("input", function () {
    let textLength = textArea.value.length;
    result.textContent = textLength + "/" + limit;

    updateStyles(textLength >= limit);
});

function updateStyles(isLimitReached) {
    const color = isLimitReached ? "red" : "black";
    textArea.style.color = color;
    textArea.style.borderColor = color;
    result.style.color = color;
}

