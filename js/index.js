const txtarea = document.getElementById("text")
const btn = document.getElementById("btn")
const list = document.getElementById("list")


//let the button be linked to the textarea

document.querySelector("#btn").onclick = function (event) {
    if (txtarea.value == 0) {
        alert("please insert text");
    } else {
        addText()
        document.getElementById('text').value = "";
    }
}

txtarea.addEventListener("keypress", function (event) {
    if (event.code === "Enter" && !txtarea.value == "") {
        event.preventDefault();
        addText();
        document.getElementById('text').value = "";
    }
    else if(txtarea.value == 0){
        alert("please insert text");
    }
})



function addText() {
    document.querySelector('#list').innerHTML += `
    <li>
    <input type="checkbox">${document.querySelector('#text').value}
    </input>
    <a href="#" class="btnX" onclick="var li = this.parentNode; var ul = li.parentNode; ul.removeChild(li);">X
    </a>
    </li>
    `;
}



// let rmv = document.querySelectorAll(".rmv")

// for (let i = 0; i < rmv.length; i++) {
//     rmv[i].addEventListener("click", function (event) {
//         console.log(i);
//         let li = document.querySelectorAll("#list li")
//         li[i].remove();
//         console.log(event);
//     })
// }

// else {
//     //after sending it make it appear as a new checkbox
//     document.querySelector('#list').innerHTML += `
//             <li>
//             <input type="checkbox">${document.querySelector('#text').value}
//             </input>
//             </li>
//     `;
// }