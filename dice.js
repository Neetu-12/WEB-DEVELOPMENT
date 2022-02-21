function dice(){
  var links=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]
  var count=[1,2,3,4,5,6]
  var secret_no=Math.floor(Math.random() * links.length)
  var exchange=Math.floor(Math.random() * links.length)
  var total=count[secret_no]+count[exchange]
  document.getElementById("count_id").innerHTML=total
  document.getElementById("link1").src=links[secret_no]
  document.getElementById("link2").src=links[exchange]
}






























// var dice = {
//     sides: 6,
//     roll: function () {
//       var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//       return randomNumber;
//     }
//   }
  
//   //Prints dice roll to the page
  
//   function printNumber(number) {
//     var placeholder = document.getElementById('placeholder');
//     placeholder.innerHTML = number;
//   }
  
//   var button = document.getElementById('button');
  
//   button.onclick = function() {
//     var result = dice.roll();
//     printNumber(result);
//   };
  
  