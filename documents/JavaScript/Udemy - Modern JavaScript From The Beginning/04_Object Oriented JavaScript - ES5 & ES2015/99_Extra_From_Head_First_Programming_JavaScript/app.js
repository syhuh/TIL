function Dog(name, breed, weight){
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.sepcies = "개과";

Dog.prototype.bark = function(){
  if(this.weight > 25){
    console.log(this.name + "는 월월 짖어요!");
  } else {
    console.log(this.name + "는 깽깽 짖어요!");
  }
};

Dog.prototype.run = function(){
  console.log("달리기!");
};

Dog.prototype.wag = function(){
  console.log("꼬리흔들기!");
};

const fido = new Dog("피도", "잡종", 38);
const fluffy = new Dog("플러피", "푸들", 30);
const spot = new Dog("스포트", "치와와", 10);

spot.bark = function() {
  console.log(this.name + "는 멍멍 짖어요!");
};

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();

Dog.prototype.sitting = false;
Dog.prototype.sit = function() {
  if (this.sitting) {
    console.log(this.name + "는 이미 앉아있습니다.");
  } else {
    this.sitting = true;
    console.log(this.name + "가 앉습니다.");
  }
};

fido.sit();

console.log(fido);
console.log(fluffy);
console.log(spot);

console.log(fido.hasOwnProperty("sitting"));
console.log(fluffy.hasOwnProperty("sitting"));
console.log(spot.hasOwnProperty("sitting"));

// Prototype을 상속받는 Prototype
function ShowDog(name, breed, weight, handler){
  Dog.call(this, name, breed, weight);
  this.handler =handler;
}

ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;
ShowDog.prototype.league = "웹타운";
ShowDog.prototype.stack = function(){
  console.log("차렷");
}
ShowDog.prototype.bait = function(){
  console.log("간식");
}
ShowDog.prototype.gait = function(kind){
  console.log(kind + "하는중");
}
ShowDog.prototype.groom = function(){
  console.log("빗질");
}

var scotty = new ShowDog("스카티", "스코틀랜드 테리어", 15, "쿠키");
scotty.stack();
scotty.bark();
console.log(scotty);

console.log(fido instanceof Dog);
console.log(fido instanceof ShowDog);
console.log(scotty instanceof Dog);
console.log(scotty instanceof ShowDog);

console.log("피도의 생성자: " + fido.constructor);
console.log("스카티의 생성자: " + scotty.constructor);