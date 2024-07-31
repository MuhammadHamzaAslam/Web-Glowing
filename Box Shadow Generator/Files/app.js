function generate() {
    let hShadow = document.getElementById('h-shadow').value;
    let vShadow = document.getElementById('v-shadow').value;
    let bRadius = document.getElementById('b-radius').value;
    let sRadius = document.getElementById('s-radius').value;
    let sColor = document.getElementById('s-color').value;
    let boxColor = document.getElementById('box-color').value;
    let insetCheck = document.getElementById('inset');
    let box = document.getElementById('boxDiv');
    let copyArea = document.getElementById('copyArea');

    box.style.backgroundColor = boxColor;
    let shadow = `${insetCheck.checked ? 'inset' : ''} ${hShadow}px ${vShadow}px ${bRadius}px ${sRadius}px ${sColor}`;
    box.style.boxShadow = shadow;

    copyArea.value = `box-shadow: ${shadow};`;
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
