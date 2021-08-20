function Hello()
{
  var number1 = document.getElementById("num1").value;
  var number2 = document.getElementById("num2").value;
  const ans=+Math.floor(Math.random()*(number2-number1))+ +number1;
  document.getElementById("answer").innerHTML=ans;
}

