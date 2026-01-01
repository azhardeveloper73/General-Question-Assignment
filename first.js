const contents = document.querySelectorAll(".content");

contents.forEach(content => {
    const plusBtn = content.querySelector(".plus");
    const minusBtn = content.querySelector(".minus");
    const extraItem = content.querySelector(".content-xtraitem");

    plusBtn.addEventListener("click", () => {
        contents.forEach(item => {
            if (item !== content) {
                item.querySelector(".content-xtraitem").style.display = "none";
                item.querySelector(".plus").style.display = "inline-block";
                item.querySelector(".minus").style.display = "none";
            }
        });

        extraItem.style.display = "block";
        plusBtn.style.display = "none";
        minusBtn.style.display = "inline-block";
    });

    minusBtn.addEventListener("click", () => {
        extraItem.style.display = "none";
        plusBtn.style.display = "inline-block";
        minusBtn.style.display = "none";
    });
});
