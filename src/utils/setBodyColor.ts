
export default function setBodyColor({color}:{color:string}):void{
    document.documentElement.style.setProperty('--bodyColor',color);
}