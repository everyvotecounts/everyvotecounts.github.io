function toggleCollapse(e) {
    var element = document.querySelector(`#collapsibleItem${e} > .collapsibleBody`)
    if (element.style.display == "" || element.style.display == "none") {
        element.style.display = "block"
    }
    else {
        element.style.display = "none"
    }
}