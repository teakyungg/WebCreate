export function CreatBlock(x,y,z,color,text)
{
    if(x == 0 || y == 0) return;
    if(!z) z = 0;

    const newDiv = document.createElement('div');

    newDiv.style.backgroundColor = color;
    newDiv.style.width = x + "px";
    newDiv.style.height = y + "px";
    newDiv.style.zIndex = z;
    newDiv.style.position = "absolute";

    newDiv.innerHTML = text;
    newDiv.style.textAlign = "center";
    

    document.body.appendChild(newDiv);
}