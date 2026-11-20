function showMessage() {
    alert("CYBER LAB 4 лабораторид тавтай морил! Лаборатори удахгүй нээгдэнэ.");
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("CYBER LAB 4 website loaded successfully!");

    const secondaryButton = document.querySelector(".secondary");

    secondaryButton.addEventListener("click", function () {
        document.querySelector(".cards").scrollIntoView({
            behavior: "smooth"
        });
    });
});
