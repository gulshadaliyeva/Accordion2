let menua = document.querySelectorAll(".menu a")

menua.forEach(element => {
    element.onclick = function (e) {
        e.preventDefault()
        document.querySelector(".menu a.active").classList.remove("active")
        element.classList.add("active")
        document.querySelector(".wrapper.active").classList.remove("active")
        document.querySelector(`.wrapper[data-id="${element.getAttribute("data-id")}"]`).classList.add("active")

    }
});
