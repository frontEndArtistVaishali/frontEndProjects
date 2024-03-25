
const cursorEl = document.querySelector(".cursor");
var timeout;


const movement = (e) => {
    console.log("moving..");

    let x = e.pageX;
    let y = e.pageY;

    cursorEl.style.left = x + "px";
    cursorEl.style.top = y + "px";
    cursorEl.style.display = "block";
    
    clearTimeout(timeout)
    timeout = setTimeout(
        () => {
            cursorEl.style.display = "none";
        } , 
        2000
        );
}
    
    document.addEventListener(
        "mousemove",
        movement
    );
document.addEventListener(
    "mouseout" , 
    () => {
        cursorEl.style.display = "none";
    }
)