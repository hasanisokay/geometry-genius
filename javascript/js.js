// listening mouse enter and changing bg color by calling a fucnction with it
const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.addEventListener("mouseenter",function(event){
        randomBgColor(card);
    card.addEventListener("mouseleave",function(){
        card.style.backgroundColor ='white'
    })
})}
// producing random color for background change on mouseenter
function randomBgColor(c){
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const  bgColor = "rgb(" + x + "," + y + "," + z + ")";
    c.style.backgroundColor = bgColor;
}

// listening calculate buttons
const buttons = document.getElementsByClassName('btn-calculate')
for(button of buttons){
    button.addEventListener('click',function(event){
        // getting input field data for base and height
        const baseInputField = event.target.parentNode.parentNode.children[2].children[0].children[0].value;
        const heightInputField = event.target.parentNode.parentNode.children[2].children[1].children[0].value;
        const baseInputValue = parseFloat(baseInputField);
        const heightInputValue = parseFloat(heightInputField);
        // alert for NaN type
        if(isNaN(baseInputValue) || isNaN(heightInputValue)){
            return alert("Please Enter a Valid Number")
        }
    })
    
}