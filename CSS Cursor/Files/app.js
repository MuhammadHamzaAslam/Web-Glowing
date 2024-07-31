let size = document.getElementById('size')
let borderColor = document.getElementById('border-color')
let boxColor = document.getElementById('box-color')
let border = document.getElementById('border')
let div = document.getElementById('boxDiv')

copyArea.innerText = `cursor : auto;`
function cursor(cursor) {
    console.log(cursor);
    div.style.cursor=`${cursor}`
    // div.style.backgroundColor=

    copyArea.innerText = `cursor : ${cursor};`
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