// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

navToggle.addEventListener("click", () => {
    // console.log(links.classList)
    // method 1
    // if (links.classList.contains("show-links")){
    //     links.classList.remove("show-links")
    // }
    // else{
    //     links.classList.add("show-links")
    // }

    // another method of doing this is by using the toggle method
    links.classList.toggle("show-links")
})
