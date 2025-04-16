const dateInput = document.querySelector('input[type="date"]');

function goNext() {
    const selectedDate = dateInput.value;
    if (selectedDate === '2025-04-20')  {
        window.location.href = "question.html";
    } else if (selectedDate !== '2025-04-20') {
        alert("The date is not correct.");
    } else {
        alert("Please select a date.");
    }
}