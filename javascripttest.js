const darkbtntoggel = document.getElementById("drkbtn");
darkbtntoggel.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})

// const lightbtn = document.getElementById("newitem") //get the element first then make the operation
// lightbtn.addEventListener("click", () => document.body.classList.toggle('light'))

initializing function
    increase 
decrease
reset

let count = 0;

function decrease() {
    count = count - 1
    return count
}
function increase() {
    count = count + 1;
    return count
}

if count changed
function count-UI - updater{
    element.innerhtml = <p>`${count}`</p>
}
i need to keep refreshing each time the value is updated



for (let index = 0; index < array.length; index++) {
    const element = array[index];

}
