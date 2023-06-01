const githubname = document.getElementById("githubname");
const searchbutton = document.getElementById("search-btn");
const lastuser = document.getElementById("last-users");

const ui = new UI();
const str = new stroge();

searchbutton.addEventListener("click",search);


const url = `https://api.github.com/users/`;

async function getData(username){

    const responseUser = await fetch(url + username);
    const responseRepo = await fetch(url + username + "/repos");

    const userData = await responseUser.json();
    const repoData = await responseRepo.json();
    
    return{
        user:userData,
        repo:repoData
    }
}
function search(e){

    let username = githubname.value.trim();
    
    if(githubname.value === ""){
        ui.showalert("danger","Lütfen Kullanıcı Adı Giriniz"); // hata mesajı
    }
    else{
       
        getData(username).then(response => {
            if(response.user.message === "Not Found"){
                ui.showalert("danger","Kullanıcı Bulanamadı");
            }
            else{
                ui.showUI(response.user)
                ui.showalert("success","Kullanıcı Bulundu");
                ui.showrepo(response.repo);
                str.addToStroge(username);
            }
           
        });
        
      
    }   
    
   
    ui.clear();
    e.preventDefault();
}

function removeToStroge(){

    if(confirm("Emin Misiniz?")){
        
        while(lastuser.firstElementChild != null){
            lastuser.firstElementChild.remove();
        }
        
    }

}