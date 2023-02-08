const txtarea = document.getElementById("text")
const btn = document.getElementById("btn")
const list = document.getElementById("list")


//let the button be linked to the textarea
//when button is clicked, take the value of the text area and send it to the list
document.querySelector("#btn").onclick = function (event) {
    //when there is no value, send an alert that there is no message placed in the text area
    if (txtarea.value == 0) {
        alert("please insert text");
    }
    //else, take the inputted value of the text area and send it(or let a addtext variable work)
    else {
        addText()
        document.getElementById('text').value = "";
    }
}

//make it so that when enter is pressed it can also work the same as the button
txtarea.addEventListener("keypress", function (event) {
    //when enter is pressed or also when the there is no text in the textarea
    if (event.code === "Enter" && !txtarea.value == "") {
        //prevent a bug where it opens a whole new website instead of staying in the same page
        event.preventDefault();
        //take the textarea value and enter it to the list
        addText();
        //after taking the value, erase the past value so that is looks clean
        document.getElementById('text').value = "";
    }
    else if (txtarea.value == 0) {
        //when there is no text inputted, alert that there needs to be a text
        alert("please insert text");
    }
})


//making a function where the value taken can be placed into the html as a new innerHTML element
function addText() {
    document.querySelector('#list').innerHTML += `
    <li>
    <input type="checkbox">${document.querySelector('#text').value}
    </input>
    //a button that is able to erase the li element
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