let square = x => x * x;
console.log(square(9));

const name = 'alvin outside';

let user ={
  name: 'alvin inside',
  sayHi: () =>{
    console.log(arguments);//this is some generic 'global' value
    console.log(`Hi. I'm ${this.name}`);//this is not binded here
    //- in short, anything that you need to access in the same block scope that need to be
    //referenced by the this keyword is not accessible inside an arrow function
    console.log(name);//global variable is accessible
  },
  sayHi2 () {//this is same as the one below
    console.log(arguments);//this will pass the arguments object
    console.log(`Hi. I'm ${this.name}`);
    console.log(name);//global variable is accessible

  },
  sayHi3: function(){
    console.log(`Hi. I'm ${this.name}`);
  }
}

user.sayHi(123,1,2);
user.sayHi2(123,1,2);
user.sayHi3();
