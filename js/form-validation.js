document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const fields = [
        { inputId: "name", errorId: "nameError" },
        { inputId: "phone", errorId: "phoneError" },
    ];

    fields.forEach((field) => {
        const input = document.getElementById(field.inputId);
        const error = document.getElementById(field.errorId);

        if (!input.value.trim()) {
            error.style.display = "block";
            input.classList.add("form__input--invalid");
            isValid = false;
        } else {
            error.style.display = "none";
            input.classList.remove("form__input--invalid");
        }
    });

    if (isValid) {
        this.submit();
    }
});
