var Memory = 0;
var Number1 = "";
var Number2 = "";
var NewNumber = "blank";
var opvalue = "";

function Display(displaynumber) {
document.calculator.answer.value = displaynumber;
}

function MemoryClear() {
Memory = 0;
document.calculator.mem.value = "";
}

function MemoryRecall(answer) {
if(NewNumber != "blank") {
Number2 += answer;
} else {
Number1 = answer;
}
NewNumber = "blank";
Display(answer);
}

function MemorySubtract(answer) {
Memory = Memory - eval(answer);
}

function Backspace(answer) {
answerlength = answer.length;
answer = answer.substring(0, answerlength - 1);
if (Number2 != "") {
Number2 = answer.toString();
Display(Number2);
} else {
Number1 = answer.toString();
Display(Number1);
   }
}


function ClearCalc() {
Number1 = "";
Number2 = "";
NewNumber = "blank";
Display("");
}

function CheckNumber(answer) {
if(answer == ".") {
Number = document.calculator.answer.value;
if(Number.indexOf(".") != -1) {
answer = "";
   }
}
if(NewNumber == "yes") {
Number2 += answer;
Display(Number2);
}
else {
if(NewNumber == "blank") {
Number1 = answer;
Number2 = "";
NewNumber = "no";
}
else {
Number1 += answer;
}
Display(Number1);
   }
}
function AddButton(x) {
if(x == 1) EqualButton();
if(Number2 != "") {
Number1 = parseFloat(Number1) + parseFloat(Number2);
}
NewNumber = "yes";
opvalue = '+';
Display(Number1);
}
function SubButton(x) {
if(x == 1) EqualButton();
if(Number2 != "") {
Number1 = parseFloat(Number1) - parseFloat(Number2);
}
NewNumber = "yes";
opvalue = '-';
Display(Number1);
}
function MultButton(x) {
if(x == 1) EqualButton();
if(Number2 != "") {
Number1 = parseFloat(Number1) * parseFloat(Number2);
}
NewNumber = "yes";
opvalue = '*';
Display(Number1);
}
function DivButton(x) {
if(x == 1) EqualButton();
if(Number2 != "") {
Number1 = parseFloat(Number1) / parseFloat(Number2);
if(parseFloat(Number2)==0){Display ('на 0 не делится');
return}
}
NewNumber = "yes";
opvalue = '/';
Display(Number1);          
}
function SqrtButton() {
Number1 = Math.sqrt(Number1);
NewNumber = "blank";
Display(Number1);
}

function PercentButton() {
if(NewNumber != "blank") {
Number2 *= .01;
NewNumber = "blank";
Display(Number2);
   }
}
function RecipButton() {
Number1 = 1/Number1;
NewNumber = "blank";
Display(Number1);
}
function NegateButton() {
Number1 = parseFloat(-Number1);
NewNumber = "no";
Display(Number1);
}
function EqualButton() {
if(opvalue == '+') AddButton(0);
if(opvalue == '-') SubButton(0);
if(opvalue == '*') MultButton(0);
if(opvalue == '/') DivButton(0);
Number2 = "";
opvalue = "";
}




///////Test

var d=document, 
    rez=0, 
    ball=0,            
    vsego=5,          
    count=0;           

function stopTest(){

var i=0;


for(i=0; i<d.getElementsByName("tags1").length; i++){
    
    if(d.getElementsByName("tags1")[i].checked) {
      
      if(i==0){rez+=2; count++;}       
    }
}

for(i=0; i<d.getElementsByName("tags2").length; i++){
    
    if(d.getElementsByName("tags2")[i].checked) {
      
      if(i==2){rez+=2; count++;}      
    }
}

for(i=0; i<d.getElementsByName("tags3").length; i++){
    
    if(d.getElementsByName("tags3")[i].checked) {
      
      if(i==3){rez+=2; count++;}     
    }
}

for(i=0; i<d.getElementsByName("tags4").length; i++){

    if(d.getElementsByName("tags4")[i].checked) {
      
      if(i==2){rez+=2; count++;}   
    
    }
}

for(i=0; i<d.getElementsByName("form").length; i++){

    if(d.getElementsByName("form")[i].checked) {
      
      if(i==1){rez+=2; count++;}  
    } 
}

alert('Вы правильно ответили на '+count+ ' вопросов из '+vsego+'.');   
d.getElementById("blok").style.display='none';
d.getElementById("btStart").style.display='block';
location.reload(true);
rez=0;
count=0;
}









