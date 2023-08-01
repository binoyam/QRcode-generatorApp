const imgBox = document.getElementById("img-box");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const btn = document.getElementById("btn");

btn.addEventListener('click', generateQR);
function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000)
    }
}
qrText.addEventListener("keyup", e => {
    e.preventDefault();
    if (e.keyCode === 13) {
        generateQR();
    }
});
