let size = document.getElementById('size')
let borderColor = document.getElementById('border-color')
let boxColor = document.getElementById('box-color')
let border = document.getElementById('border')
let div = document.getElementById('boxDiv')
div.style.border='2px solid #000000'
div.style.backgroundColor='#007BFF'

copyArea.innerText = `border : 2px solid #000000;`
function borderGen() {
    // console.log(div);
    div.style.border=`${size.value}px ${border.value} ${borderColor.value}`
    div.style.backgroundColor=`${boxColor.value}`

    copyArea.innerText = `border :${size.value}px ${border.value} ${borderColor.value};`
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