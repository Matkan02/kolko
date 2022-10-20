const fieldselement= document.querySelectorAll(".board-item");
const panel = document.querySelector(".panel");
const button = document.querySelector(".reset")
let fields;

let activeplayer;
let gameactive ;


const setdefaults = () =>{
    fields = ["","","","","","","","",""];
    activeplayer= "X";
    gameactive = true;

}
 setdefaults();
const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]

];

const displaywinmassage = () =>{
    panel.innerHTML = `Gratulacje ${activeplayer}.  Wygrałeś`;
}

const displaytiemassage = () =>{
    panel.innerHTML = `Remis!`;
}

const clearmassage = () => {
    panel.innerHTML = "";
}

const validategame = () =>{
    let gamewon = false;
    for(let i = 0; i<=7;i++){
        const [posA, posB, posC]= winning[i];
        const value1 = fields[posA];
        const value2 = fields[posB];
        const value3 = fields[posC];

        if(value1 !== "" && value1 === value2 && value1 === value3){
        
        gamewon = true;
        break;
        }
    }

    if(gamewon){
        gameactive = false;
        displaywinmassage();
    }
   

    

    
};






    


fieldselement.forEach(field =>{
    field.addEventListener("click", e =>{
        
        const { pos } = e.target.dataset;

        if( gameactive && fields[pos] === ""){
            fields[pos] = activeplayer;
            e.target.classList.add(`board-item--filled-${activeplayer}`);
            
            activeplayer = activeplayer === "X" ? "O" : "X";
            validategame();
        
        }




        
    });


});

const handbuttonclick = () => {
    setdefaults();
    fieldselement.forEach(field =>{
      field.classList.remove('board-item--filled-X','board-item--filled-O');
    });

    clearmassage();
}

button.addEventListener('click',handbuttonclick);



