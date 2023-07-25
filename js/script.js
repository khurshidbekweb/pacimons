"use strict"

let wrapper = document.querySelector(".wrapper");
let elForm = document.querySelector(".mainForm");
let elSelect = document.querySelector(".candys");
let elSearch = $(".search");

function renderUi(data){
    data.forEach((e)=>{
        let random = Math.floor(Math.random()*50);
        let card = creatElemen("div", "card bg-white rounded-3 p-2", `
        <div class="img text-center position-relative">
            <img class="w-75" src="${e.img}" alt="${e.candy}">
            <img class="position-absolute" src="./images/heart.svg" alt="like">
        </div>
        <hr>
        <div class="info">
            <h2 class="name">${e.name}</h2>
            <h5><strong>${e.num}</strong></h5>
            <div class="d-flex mb-1 align-items-center justify-content-between">
                <h4><strong>Age</strong></h4>
                <h4><strong>${e.candy_count ? e.candy_count : random}</strong></h4>
            </div>
            <div class="d-flex mb-2 align-items-center justify-content-between">
                <h4>${e.height}</h4>
                <h4>${e.weight}</h4>
            </div>
        </div>
    `)
    wrapper.append(card);
    })
}
renderUi(pokemons);

function sorts(){
    let creatArr = [];
    pokemons.forEach(e =>{
        if(!creatArr.includes(e.candy)){
            creatArr.push(e.candy)
        }        
    })
    
    creatArr.forEach(e =>{
        let option = document.createElement("option");        
        option.textContent = e;
        elSelect.append(option);
    })
}
sorts()

elForm.addEventListener("change", (e)=>{
    e.preventDefault();
    const selectValue = elSelect.value;   
    
    if( selectValue == "all" ){
        renderUi(pokemons);
    } else{
            let filteredArr = pokemons.filter(item=>{
            return item.candy == selectValue;
        })
        wrapper.innerHTML = "";
        renderUi(filteredArr);
    }
});

elSearch.addEventListener("keyup", (evt)=>{  
    let title = evt.target.value;

    let filteredArr = pokemons.filter((e)=>{
        return e.name.toLowerCase().includes(title.toLowerCase());
    });
    wrapper.innerHTML = "";
        renderUi(filteredArr);
});
