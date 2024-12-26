import {CreatBlock} from "./modu.mjs";

const CreatButton = document.getElementById("create_button");
let clickBoxs;

/* 상자 생성 버튼 눌렀을떄 */
CreatButton.addEventListener("click", () => {

    let x = document.getElementById("x").value;
    let y =  document.getElementById("y").value;
    let z = document.getElementById("z").value;
    let color =  document.getElementById("color").value;
    let text = document.getElementById("text").value;

    CreatBlock(x,y,z,color,text);
})

/* 상자 처음 클릭 할 때*/
document.addEventListener("pointerdown", (event) => {

    if(event.target.tagName != 'DIV') return;
    if(event.target.id =='create_box')  return;
    
    clickBoxs = event.target;

})


/* 상자 클릭 중 일때 */
document.addEventListener("pointermove", (event) => {

    if(clickBoxs)
    {
         clickBoxs.style.left = `${event.clientX - clickBoxs.offsetWidth / 2}px`;
        clickBoxs.style.top = `${event.clientY - clickBoxs.offsetHeight / 2}px`;     
    }
})

/* 상자 클릭을 땟을 때  */
document.addEventListener("pointerup",() => {
    clickBoxs = null;
}) 