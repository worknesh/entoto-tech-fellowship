
for(var number = 1; number <= 100; number++){
  if(number % 3 == 0 && number % 5 == 0){
    console.log(number +" "+ "fizzbizz")
  }
   else if(number % 3 == 0){
    console.log(number +" "+ "fizz")
  }
 else if(number % 5 == 0){
    console.log(number +" "+ "bizz")
  }
  else {
    console.log("it is not divisible by 3 and 5")
     
}
}