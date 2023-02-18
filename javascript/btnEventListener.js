// listening calculate buttons for first 4 cards
const buttons = document.getElementsByClassName('btn-calculate')
for (button of buttons) {
    button.addEventListener('click', function (event) {
        // getting input field data for base and height
        const baseInputField = event.target.parentNode.parentNode.children[2].children[0].children[0];
        const heightInputField = event.target.parentNode.parentNode.children[2].children[1].children[0];
        const baseInputValue = parseFloat(baseInputField.value);
        const heightInputValue = parseFloat(heightInputField.value);
        
        // resetting input fields 
        baseInputField.value = '';
        heightInputField.value = '';

        // getting the shape name
        const shapeName = event.target.parentNode.parentNode.children[0].innerText;

        // alert for NaN and negetaive type
        if (validator(baseInputValue, heightInputValue)){
        // check the class and calculate area
        const area = classChecker(event.target, baseInputValue, heightInputValue);
        
        // call display function to show the Area 
        displayTable(area, shapeName);   
        }
    })
}
// check the class to determine the function for area
function classChecker(e, base, height) {
    // this will check for Area = length x width type shape
    // and call the exact function designed for each type of formula.
    if (e.classList.contains("two-variable")) {
        return areaOfParallelogramRectangle(base, height);
    }
    // this will check for Area = .5 x base x height type shape
    else if (e.classList.contains("three-variable")) {
        return areaOfTrianglePentagonRhombus(base, height);
    }
}