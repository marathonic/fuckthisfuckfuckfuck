function getHistory(){
    return document.getElementById('history-value').innerText;
}



function printHistory(num){
    document.getElementById('history-value').innerText=num;
}


function getOutput(){
    return document.getElementById('output-value').innerText;
}


function printOutput(num){
    if(num==''){
        document.getElementById('output-value').innerText=num;
    }

    else{
        document.getElementById('output-value').innerText = getFormattedNumber(num);
    }

}



function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString('en');
    return  value;
}



function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

let arri=[];
let curr = 0;
let prev = 0;
const reducer = (previousValue, currentValue) => previousValue + currentValue;

let operator = document.getElementsByClassName('operator');
for(let i= 0; i < operator.length; i++){
    operator[i].addEventListener('click',function(){
        if(this.id=='clear'){
            printHistory('');
            printOutput('');
        }
        if(this.id =='backspace'){
            let output=reverseNumberFormat(getOutput()).toString();
            if(output){
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            let output=getOutput();
            let history=getHistory();
            if(output != ''){
                output=reverseNumberFormat(output);
                history=history+output;

                if(this.id!='') {
                    
                    
                }

                switch(this.id){

                    case '+':

                        //printHistory('');
                        curr = output;
                        printOutput(curr);
                        arri.push(curr);
                        alert(arri);
                        alert(arri.reduce(reducer))
                        break;

                    case '=':
                        alert('HEEEEE'); 
                        break;



                }
            }
        }
    })
}


let number = document.getElementsByClassName('number');
for(let i= 0; i < number.length; i++){
    number[i].addEventListener('click',function(){
        let output=reverseNumberFormat(getOutput());
        if(output!=NaN){
            output = output+this.id;
            printOutput(output);
        }
    })
};

