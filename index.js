setTimeout(function(){
  document.getElementById('im').style.visibility = 'visible';
},1500);


setTimeout(function(){
  document.getElementById('intro').style.visibility = 'visible';
},3000);

setTimeout(function(){
  document.getElementById("plus").classList.add("animate__flash"); 
},9000);

const texts = ["am in Madrid", "love design", "am a web developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter= "";
let var2
let rounds = 0;

(function type(){

  if(count === texts.length){
    count = 0;
  }

  currentText = texts[count];

  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter; 
  if(letter.length === currentText.length){
    count++;
    index = 0;
  }

  var2 = setTimeout(type, 100);

  rounds += 1;

  function pause(){
  clearTimeout(var2);
  };

  if (rounds > 81){
    pause();

  }

}())









