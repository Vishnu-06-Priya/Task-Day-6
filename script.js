
//1ST Q=https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
  class Movie{
    constructor(ticket,direction,production){
        this.ticket= ticket;
        this. direction= direction;
        this.production = production;
    }
    getPG(){
    return this.production;
}
}  
var film = new Movie("Avatar","Narniya","Ice age");
console.log(film.getPG());


//2nd Q=https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
class Circle{
  constructor(radius,color){
    this.radius=radius;
    this.color=color;
  }
  getRadius(){
    return this.double;
  }
}
var round = new Circle("double","string");
console.log(round.getRadius());


//3rd Q=Write a “person” class to hold all the details.

class Person{
constructor(name,color,place){
  this.name=name;
  this.color=color;
  this.place=place;
}
getQualification(){
  return this.Mathematician;
}
}
var identity=new Person("vishnu","blue","salem");
console.log(identity.getQualification());


//4th Q=write a class to calculate the uber price.
class Uber{
  construtor(price,km){
    this.price=price;
    this.km=km;
  }
  uber(){
  return this.price*this.km;
  }
}
var result=new Uber(10,1);
console.log(result.uber());