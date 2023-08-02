const mainElement = document.getElementById('main');
if(mainElement) {
    mainElement.remove();
}

const newHeader = document.getElementById('victory');
if (newHeader) {
    newHeader.textContent = "YOUR-NAME is the champion"
}
