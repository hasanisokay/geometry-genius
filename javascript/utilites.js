function displayTable(area, shapeName) {
    const tableBody = document.getElementById('table-body')
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${counter}</td>
    <td>${shapeName}</td>
    <td id="table-data-area"> ${area}cm<sup>2</sup> </td>    
    <td><button class="btn btn-info btn-sm text-xs" id="convert-area-unit">convert to m<sup>2</sup></button></td>    
    `
    tableBody.appendChild(tr)
    counter++;
}

function toMetereSquare(areaInCmSquare){
    return (areaInCmSquare * .0001).toFixed(2)
}

// calculating area of triangle and pentagon and rhombus
function areaOfTrianglePentagonRhombus(a, b) {
    return (.5 * a * b).toFixed(2);
}
// area of ellipse
function areaOfEllipse(a, b) {
    return (3.14 * a * b).toFixed(2);
}
// area of parallelogram and rectangle
function areaOfParallelogramRectangle(a, b) {
    return (a * b).toFixed(2);
}