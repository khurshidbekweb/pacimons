
function $(item){
    return document.querySelector(item);
}

function creatElemen(tagName,className,content){
    let newElement = document.createElement(tagName);
    if(className){
        newElement.setAttribute("class", className);
    }
    if(content){
        newElement.innerHTML = content;
    }
    

    return newElement;
}