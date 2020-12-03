var icon = document.getElementById("icon")
var url = document.getElementById("url")

url.addEventListener("keydown", () => {
    const favicon = `https://favicons.githubusercontent.com/${url.value}`
    icon.src = favicon
})