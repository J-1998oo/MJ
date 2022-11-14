/* function pS(range) {
  for (let i =0; i < range; i++) {
    let result = "";
    for (let j = 1; j <= range-i; j++) {
      result += "*";
    }
    console.log(result);
  }
 
}

pS(5);
 */
/* 

function bigNumb(array){
    let bignum=0;
    for(let i=0;i<array.length;i++)
    {
        
        if(array[i]>bignum){
            bignum=array[i];
        }
    }
    console.log(bignum);
}
let z=[1,5,7,10,4,50,6,82,2,4];

bigNumb(z); */

/* 

function counter (array){
    let cont =0;
    for(let i=0;i< array.)

}



let a=5;
let z=[5,1,5,7,5,10,4,5,50,6,82,5,2,4,5];
 */

/* function duplecate(array) {
  let d = [];
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) != i && d.indexOf(array[i]) == -1) {
      d.push(array[i]);
    }
    
  }
  return d;
}

let z = [5, 1, 5, 7, 5, 10, 4, 5, 50, 6, 82, 5, 2, 4, 5];

console.log(duplecate(z)); */
/* 
function upper(string) {
  let x = string.split(" ");
  let s = [];
  for (let i = 0; i < x.length; i++) {
    s.push(x[i].charAt(0).toUpperCase() +x[i].slice(1)) 
  }
  return s.join(' ')
}

let a = "mohammad basem rajab alnatsheh";
console.log( upper(a));
 */

/* function l(string){
  let x=string.split(" ");
  let s=[];
   for(let i=0;i<x.length;i++){
    if(x[i].length>s.length){
      s=x[i];
    }

   }
   return s;
}


let a = "mohammad basem rajab mohammadHashem alnatsheh";
console.log( l(a)); */
/* 

function bigNumb(array){
  let bignum=[];
  if(array[0]>=0){
  for(let i=0;i<array.length;i++)
  {

      if(array[i]>bignum){
          bignum=array[i];
      }
  }}
  else if(array[0]<0){
    bigNumb=-1;
    for(let i=0;i<array.length;i++)
  {

      if(array[i]<bignum){
          bignum=array[i];
      }
  }
  }
  console.log(bignum);
}

function num(array) {
  let x=array;
  let p =[];
  let n=[];
  for(i=0;i<x.length;i++){
    if(x[i]>=0){
      p.push(x[i]);
    }else{
      n.push(x[i]);
    }
  }
  
  console.log(p);
  bigNumb(p)
  console.log(n);
  bigNumb(n)
}




let a=[12,-15,-16,19,20,54,-100];
num(a); */
/* 
function uniqChar (string){
  let x="";
  for (let i=0;i<string.length;i++){
    if (x.indexOf(string.charAt(i)) ==-1){
      x += string[i];
    }

  }
  return x;
}


let a = "mohammad basem rajab mohammad Hashem alnatsheh";

console.log(uniqChar(a)); */

/* let a = "mohammad basem rajab mohammad Hashem alnatsheh";

function rev(string) {
  let x = string;
  let r = [];
  let s = "";
  for (let i = x.length - 1; i >= 0; i--) {
    r.push(x[i]);
  }
  for (let j = 0; j < r.length; j++) {
    s += r[j];
  }
  console.log(r);

  console.log(s);
}
rev(a);
 */
/* 
let a = "mohammad basem rajab mohammad Hashem alnatsheh";

function rev (string){
  let x=string;
  let r='';
  for(let i=x.length-1 ; i>=0;i--){
    r+=x[i];
  }
  console.log(r);
///////////////////////////////////////////////

return string.split('').reverse().join();

//////////////////////////////////////////////

}
rev(a); */
/* 


function f (num){
  let x=num;
  let n=1;
  for(let i=x;i>0;i--){
    n*=i;
  }
  console.log(n);
}

let a=100;
f(a);

 */

/* 
let users = [
  {
    firstName: "Hussam",

    lastName: "Bawwab",

    age: 28,

    address: "Irbid",

    phoneNumber: "7981323312",

    jobDescription: {
      title: "Frontend",

      salary: 132123,
    },

    childreen: [
      {
        firstName: "Samer",

        lastName: "Bawwab",

        age: 3,
      },

      {
        firstName: "Bilal",

        lastName: "Bawwab",

        age: 6,
      },

      {
        firstName: "Mariam",

        lastName: "Bawwab",

        age: 8,
      },
    ],
  },
  {
    firstName: "Sara",

    lastName: "Lobani",

    age: 22,

    address: "Amman",

    phoneNumber: "7213454654",

    jobDescription: {
      title: "Frontend",

      salary: 2133,
    },

    childreen: [
      {
        firstName: "Ail",

        lastName: "Lobani",

        age: 13,
      },

      {
        firstName: "Lobna",

        lastName: "Lobani",

        age: 16,
      },

      {
        firstName: "Zaid",

        lastName: "Lobani",

        age: 1,
      },
    ],
  },
  {
    firstName: "Ezz",

    lastName: "Ashore",

    age: 25,

    address: "Amman",

    phoneNumber: "79823216",

    jobDescription: {
      title: "Frontend",

      salary: 2133,
    },

    childreen: [
      {
        firstName: "Rami",

        lastName: "Lobani",

        age: 20,
      },

      {
        firstName: "Omar",

        lastName: "Lobani",

        age: 9,
      },
    ],
  },
  {
    firstName: "Mohammad",

    lastName: "Damra",

    age: 30,

    address: "Amman",

    phoneNumber: "79898798465",

    jobDescription: {
      title: "Frontend",

      salary: 1133,
    },

    childreen: [
      {
        firstName: "Laith",

        lastName: "Damra",

        age: 1,
      },

      {
        firstName: "Ahmad",

        lastName: "Damra",

        age: 8,
      },
    ],
  },
];


function chechAge(users){
  
  let up25=users.filter(element=>element.age > 25);
  let less25=users.filter(element=>element['age'] <=25);


return {up25:up25 , less25:less25}
}
console.log(chechAge(users));

let chechAgeObj=chechAge(users);



function returnNames(users){
  
//  let arrayOfNames=users.map(p=>p.firstName);
  let arrayOfNames=[];

for(let i=0 ; i< users.length; i++){

  arrayOfNames.push(users[i].firstName)
}

return arrayOfNames;
}

console.log(returnNames(chechAgeObj.up25));


 */

/************************************************************/
/* 
let users = [
  {
    firstName: "Hussam",

    lastName: "Bawwab",

    age: 28,

    address: "Irbid",

    phoneNumber: "7981323312",

    jobDescription: {
      title: "Frontend",

      salary: 132123,
    },

    childreen: [
      {
        firstName: "Samer",

        lastName: "Bawwab",

        age: 3,
      },

      {
        firstName: "Bilal",

        lastName: "Bawwab",

        age: 6,
      },

      {
        firstName: "Mariam",

        lastName: "Bawwab",

        age: 8,
      },
    ],
  },
  {
    firstName: "Sara",

    lastName: "Lobani",

    age: 22,

    address: "Amman",

    phoneNumber: "7213454654",

    jobDescription: {
      title: "Frontend",

      salary: 2133,
    },

    childreen: [
      {
        firstName: "Ail",

        lastName: "Lobani",

        age: 13,
      },

      {
        firstName: "Lobna",

        lastName: "Lobani",

        age: 16,
      },

      {
        firstName: "Zaid",

        lastName: "Lobani",

        age: 1,
      },
    ],
  },
  {
    firstName: "Ezz",

    lastName: "Ashore",

    age: 25,

    address: "Amman",

    phoneNumber: "79823216",

    jobDescription: {
      title: "Frontend",

      salary: 2133,
    },

    childreen: [
      {
        firstName: "Rami",

        lastName: "Lobani",

        age: 20,
      },

      {
        firstName: "Omar",

        lastName: "Lobani",

        age: 9,
      },
    ],
  },
  {
    firstName: "Mohammad",

    lastName: "Damra",

    age: 30,

    address: "Amman",

    phoneNumber: "79898798465",

    jobDescription: {
      title: "Frontend",

      salary: 1133,
    },

    childreen: [
      {
        firstName: "Laith",

        lastName: "Damra",

        age: 1,
      },

      {
        firstName: "Ahmad",

        lastName: "Damra",

        age: 8,
      },
    ],
  },
];

//tax=7.5%
//full name + age +salary after tax

function tax(users) {
  let fullNames = [];
  let usersAge = [];
  let salBeforeTax = [];
  let salAfterTax = [];
  let result ={options:[]};
  for (let i = 0; i < users.length; i++) {
    fullNames.push(users[i].firstName +' '+ users[i].lastName);
    usersAge.push(users[i].age)
    salBeforeTax.push(users[i].jobDescription.salary);
    salAfterTax.push(salBeforeTax[i] - users[i].jobDescription.salary * 0.075);

    result.options.push({'name':fullNames[i],'age':usersAge[i],'salary':salAfterTax[i]})
  }

  return result;

}

console.log(tax(users));
 */

/************************************************************/




let btn = document.getElementById("clickbtn");
btn.addEventListener("click", run);
function run() {
  let url = "https://jsonplaceholder.typicode.com/users";
  let usersArray = [];
  function fetchuser(callback) {
    fetch(url)
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        callback(null, json);
      })
      .catch((error) => {
        callback(error, null);
      });
  }

  fetchuser((error, users) => {
    if (error) {
      console.log(error);
      return;
    }

    usersArray = users;
    console.log(usersArray);
    addTable(usersArray);
  });

  function addTable(usersArray) {
    let col = ["name", "email", "street", "city", "phone"];
    const table = document.createElement("table");
    table.border = "1";
    let tr = table.insertRow(-1);

    for (let i = 0; i < col.length; i++) {
      let th = document.createElement("th");
      th.innerHTML = col[i];
      tr.appendChild(th);
    }

    for (let i = 0; i < usersArray.length; i++) {
      tr = table.insertRow(-1);
      let tabCell1 = tr.insertCell(-1);
      let tabCell2 = tr.insertCell(-1);
      let tabCell3 = tr.insertCell(-1);
      let tabCell4 = tr.insertCell(-1);
      let tabCell5 = tr.insertCell(-1);
      tabCell1.innerHTML = usersArray[i].name;
      tabCell2.innerHTML = usersArray[i].email;
      tabCell3.innerHTML = usersArray[i].address.street;
      tabCell4.innerHTML = usersArray[i].address.city;
      tabCell5.innerHTML = usersArray[i].phone;
    }

    const divShowData = document.getElementById("myDynamicTable");
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
  }
}
