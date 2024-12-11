var openSidebar = false
function toggleSidebar() {
    if (openSidebar) {
        document.getElementById("sidebar").style.width = "0"
        document.getElementById("sidebar").style.padding = "2rem 0"
    }
    else {
        document.getElementById("sidebar").style.width = "25%"
        document.getElementById("sidebar").style.padding = "2rem"
        
    }
    openSidebar = !openSidebar
}