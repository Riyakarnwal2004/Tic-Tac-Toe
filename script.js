let boxtext = document.getElementsByClassName('boxtext');
let turn=0;
Array.from(document.getElementsByClassName('boxtext')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(turn==0){
            e.target.innerText="x";
        }
        else{
            e.target.innerText="O";
        }
        turn=!(turn);

    })
    
})
