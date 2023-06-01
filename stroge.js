class stroge{
    constructor(){
        this.lastusers = document.getElementById("last-users");   
    }
    addToStroge(value){

        // let users;

        // if(localStorage.getItem("searched") === null){
        //     users = [];
        // }
        // else{
        //     users = JSON.parse(localStorage.clear("searched"));
        // }
        
        // console.log(users);

        let users = [];

        localStorage.setItem("searched", JSON.stringify(value));
        const data = JSON.parse(localStorage.getItem("searched"));

        users.push(data);

        const dataUI = users;
    
        let newLİ = document.createElement("li");
        newLİ.className = "list-group-item"
        newLİ.textContent = dataUI;

        this.lastusers.appendChild(newLİ);
    }
    
}   