// 1

let Number = 100;

if (Number < 50){
    console.log('ნაკლებია 50ზე')
}else if (Number > 20){
    console.log('მეტია 20ზე')
}else {
    console.log('შეცდომა')
}



// 2

let Name = 'მარიამი';


if (Name =="მარიამი"){
    console.log(true)
}else {
    console.log(false)
}



let result = Name? "true":"false"

console.log(result)



// 3

let Name1 = 'მარიამი';


switch (Name) {
  case "მარიამი":
    alert( 'true' );
    break;
  default:
    alert( "falseS" );
}



// 4

let Number1 = prompt('შეიყვანეთ რიცხვი')

if (Number1 % 2 == 0){
    console.log('ლუწია')
}else {
    console.log('კენტია')
}