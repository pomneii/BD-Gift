document.getElementById("name").addEventListener("input", function () {
    let nameInput = this.value;
    let errorSpan = document.getElementById("error-span");

    if (nameInput === "paew" || nameInput === "Paew" || nameInput === "PAEW" || nameInput === "") {
        errorSpan.style.display = "none";
        errorSpan.textContent = "";
    } else {
        errorSpan.style.display = "block";
        errorSpan.textContent = "This is not your name.";
    }
});

function goNext() {
    nameInput = document.getElementById("name").value;
    if (nameInput === "paew" || nameInput === "Paew" || nameInput === "PAEW") {
        window.location.href = "answer.html";
    } else {
        alert("Please enter the correct name.");
    }
}


