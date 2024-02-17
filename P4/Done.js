
/*var place = 'forth'
if (place == 'first')
{
    console.log('Gold')
}
else if (place == 'second')
{
    console.log('Silver')
}
else if (place == 'third')
{
    console.log('Bronze')
}
else
{
    console.log('No Medal :(')
}
*/
/*switch(place)
{
    case 'first':
        console.log('Gold')
        break
    case 'second':
        console.log('Silver')
        break
    case 'third':
        console.log('Bronze')
        break
    default:
        console.log('No Medal :(')
}
*/
/*var album = 'Graduation'
switch(album)
{
    case 'Graduation': console.log('10')
        break
    case 'MBDTF': console.log('10')
        break
    default : console.log('7')
}*/
/*for(i=10;i>=1;i--)
{
    console.log(i)
}
console.log('Go')*/

/*var counter = 3
while (counter > 0)
{
    console.log(counter)
    counter--
}*/
/*for(i=0;i<=2;i++)
{
    for(j=1;j<=5;j++)
    console.log('Week'+i+': Day'+j)
}*/
/*function addnum(a,b)
{
    var c = a+b
    console.log(c)
}
addnum(2,2);*/
/*function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);*/
/*var House = {
   price : '$100000',
   location : 'LA',
   address : 'No.20',
}
console.log(House);*/
/*function Arraybuilder(a,b,c)
{
    var arr = [];
    arr.push(a)
    arr.push(b)
    arr.push(c)
    console.log(arr)
}
Arraybuilder(1,2,3);*/

/*var number = Math.random() * 10;
var answer = Math.ceil(number);
console.log(number,answer)*/

/*greet = 'hello'
console.log(greet.toUpperCase())*/

/*var test = typeof(3.1)
console.log(test)*/

/*try{
    throw new ReferenceError();
}catch(err){
    console.log(err)
    console.log('runnin now')
}
console.log('lol')*/

/*var currencyOne = 100
var currencyTwo = 0
var exRate = 4.56
function exchange (amount,rate) 
{
    return amount*rate;
}
currencyTwo = exchange(currencyOne,exRate)
console.log(Math.round(currencyTwo))*/

/*var perchase1 = {
    shoes : 50,
    tax : 0.06,
    total : function() {
        totalPrice = this.shoes + (this.tax*this.shoes);
        console.log("The total is",totalPrice)
    }
}
perchase1.total()*/

/*class Car {
    constructor(color,speed) {
        this.color = "blue";
        this.speed = 50;
    }

    turboOn() {
            console.log("turbo is on!")
        }
}

const car1 = new Car("red",120)

car1.turboOn()*/

/*class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!!"
*/

/*colors = ['red','blue']
for (var color of colors){
    console.log(color);
}*/

/*var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}
for( key of Object.keys(clothingItem) ) {
    console.log(keys, ":", clothingItem[key])
}*/

/*const fruits = ['kiwi','mango','apple','pear'];
function appendindex(fruit,index) {
    console.log(`${index}.${fruit}`);
}
fruits.forEach(appendindex);*/

/*const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})*/

/*[0,10,20,30,40,50].map(function (num) {
    return num/10;
})*/

/*let veggies = ['onino','tomato'];
veggies = [...veggies,'love','me'];*/

/*const carflying = {wings:2}
const cardrive = {wheels:4}
const evecar = {...carflying,...cardrive}
console.log(evecar)*/

/*function Done(val) {

    return val * 2;

}
module.exports = Done*/