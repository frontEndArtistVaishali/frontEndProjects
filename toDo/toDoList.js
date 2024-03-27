
// item selector
const itemSel = document.querySelector("#item");

// to-do selector
const toDoBoxSel = document.querySelector("#toDoBox");

itemSel.addEventListener(
    "keyup" , 
    function(event){
        if(event.key == "Enter"){
            console.log(this.value);
            addToDo(this.value);
            this.value = "";
        };
    }
)

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${item}
        <i class="fas fa-times"></i>
    `;

    listItem.addEventListener(
        "click" ,
        function(){
            this.classList.toggle("done");
        }
    );

    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove();
        }
    );

    toDoBoxSel.appendChild(listItem);
};

