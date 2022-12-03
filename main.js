function mdisplay(data){
    let display = document.querySelector("#Resultado")
     display.innerHTML = `${data}`
}
let oper=[];
let result;
document.addEventListener('keyup',e=>{

        switch(e.key){
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
            case '/':
            case '*':
            case '-':
            case '+':
                oper.push(e.key)
                mdisplay(oper.join(""))
               
              
                break 
            case 'Enter':
               result = oper.join('') 
               mdisplay(eval(result))
               break
            case 'Backspace':
                clean()
                break
    }
})  


function insert(num)
{
   var numero = document.getElementById('Resultado').innerHTML;
   document.getElementById('Resultado').innerHTML = numero + num;

}
function clean(){
oper = []
    document.getElementById('Resultado').innerHTML = "";
}
function back(){
    var Resultado = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = Resultado.substring(0, Resultado.length -1);
}

function calcular(){
    var Resultado = document.getElementById('Resultado').innerHTML;
    if(Resultado)
     document. getElementById('Resultado').innerHTML = eval(Resultado);
     else
     {
        document.getElementById('Resultado').innerHTML = "Nada...";
     }
    
     
     

}




