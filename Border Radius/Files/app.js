let topLeft = document.getElementById('topleft')
let topRight = document.getElementById('topright')
let bottomLeft = document.getElementById('bottomleft')
let bottomRight = document.getElementById('bottomright')
let size = document.getElementById('size')
let borderColor = document.getElementById('border-color')
let boxColor = document.getElementById('box-color')
let border = document.getElementById('border')
let div = document.getElementById('boxDiv')

// by defalut style of box

div.style.border='2px solid #000000'
div.style.backgroundColor='#007BFF'
div.style.borderRadius='2%'

//   br issue herererererererererererererererer

copyArea.innerHTML = `border : 2px solid #000000;\nborder-radius : 2% 2% 2% 2%;`

// let borderCss = document.createElement('p')
// borderCss.innerText=`border : 2px solid #000000;`

// let borderRadiusCss = document.createElement('p')
// borderRadiusCss.innerText=`border-radius : 2px 2px 2px 2px;`

// copyArea.appendChild(borderCss)
// copyArea.innerHTML =borderCss 
// copyArea.innerHTML +=borderRadiusCss 
// console.log(copyArea);


function borderGen() {
    div.style.borderRadius = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}%`
    div.style.border=`${size.value}px ${border.value} ${borderColor.value}`
    div.style.backgroundColor=`${boxColor.value}`

    copyArea.innerHTML = `border :${size.value}px ${border.value} ${borderColor.value};\nborder-radius: ${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}%;`
    
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