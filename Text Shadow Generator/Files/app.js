
function generate() {
    let horizontalShadow = document.getElementById('h-shadow').value
    let verticalShadow = document.getElementById('v-shadow').value
    let blurRadius = document.getElementById('b-radius').value
    let shadowColor = document.getElementById('s-color').value
    // let insetCheck = document.getElementById('inset')
    let box = document.getElementById('box')
    let copyArea = document.getElementById('copyArea')
    let textColor = document.getElementById('t-color')

    let textCOLORS = textColor.value;
    box.style.color = textCOLORS;
    // let shadow = `${hShadow}px ${vShadow}px ${bRadius}px ${sRadius}px ${sColor}`
    let shadow = `${horizontalShadow}px ${verticalShadow}px ${blurRadius}px ${shadowColor}`
    box.style.textShadow = shadow

    copyArea.innerText = `text-shadow :${shadow};`
}
function copyText() {
    let copyText = document.getElementById("copyArea");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    Swal.fire({
        title: "Good job!",
        text: "You Copied The Text",
        icon: "success"
      });
}
