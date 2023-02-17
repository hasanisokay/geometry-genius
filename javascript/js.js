// listening mouse enter and changing bg color by calling a fucnction with it
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.addEventListener("mouseenter", function (event) {
        randomBgColor(card);
        card.addEventListener("mouseleave", function () {
            card.style.backgroundColor = 'white'
        })
    })
}
// producing random color for background change on mouseenter
function randomBgColor(c) {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = "rgb(" + x + "," + y + "," + z + ")";
    c.style.backgroundColor = bgColor;
}

// listening calculate buttons
const buttons = document.getElementsByClassName('btn-calculate')
for (button of buttons) {
    button.addEventListener('click', function (event) {
        // getting input field data for base and height
        const baseInputField = event.target.parentNode.parentNode.children[2].children[0].children[0].value;
        const heightInputField = event.target.parentNode.parentNode.children[2].children[1].children[0].value;
        const baseInputValue = parseFloat(baseInputField);
        const heightInputValue = parseFloat(heightInputField);
        const shapeName = event.target.parentNode.parentNode.children[0].innerText;
        // alert for NaN type
        if (isNaN(baseInputValue) || isNaN(heightInputValue)) {
            return alert("Please Enter a Valid Number")
        }
        // check the class and calculate area
        const area = classChecker(event.target, baseInputValue, heightInputValue)
        displayTable(area, shapeName)
    })
}
let counter = 1;
function displayTable(area, shapeName) {
    const tableBody = document.getElementById('table-body')
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${counter}</td>
    <td>${shapeName}</td>
    <td>${area}</td>    
    <td><button class="btn btn-info btn-sm text-xs convert-area-unit">convert to m<sup>2</sup></button></td>    
    `
    tableBody.appendChild(tr)
    counter++;
}

function classChecker(e, base, height) {
    if (e.classList.contains("two-variable")) {
        return areaOfParallelogramRectangle(base, height);

    }
    else if (e.classList.contains("three-variable")) {
        return areaOfTrianglePentagonRhombus(base, height);

    }
    else if (e.classList.contains("ellipse")) {
        return areaOfEllipse(base, height);
    }
}


function areaOfTrianglePentagonRhombus(a, b) {
    return (.5 * a * b).toFixed(2);
}
function areaOfEllipse(a, b) {
    return (3.14 * a * b).toFixed(2);
}
function areaOfParallelogramRectangle(a, b) {
    return (a * b).toFixed(2);
}