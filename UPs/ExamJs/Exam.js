console.log("Mohammad Alnatsheh");

let users = [
  {
    userid: 1,
    firstname: "Krish",
    lastname: "Lee",
    phonenumber: "123456",
    emailaddress: "krish.lee@learningcontainer.com ",
  },
  {
    userid: 2,
    firstname: "racks",
    lastname: "jacson",
    phonenumber: "123456",
    emailaddress: "racks.jacson@learningcontainer.com",
  },
  {
    userid: 3,
    firstname: "denial",
    lastname: "roast",
    phonenumber: "21312312",
    emailaddress: "denial.roast@learningcontainer.com",
  },
  {
    userid: 4,
    firstname: "devid",
    lastname: "neo",
    phonenumber: "8975343",
    emailaddress: "devid.neo@learningcontainer.com",
  },
  {
    userid: 5,
    firstname: "jone",
    lastname: "mac",
    phonenumber: "3254667",
    emailaddress: "jone.mac@learningcontainer.com",
  },
];

console.log("Q1");

function returnIdByFirstName(users, felter) {
  let x = felter;
  let idFilter = users.filter((user) => user.firstname == x);
  let returnId = idFilter[0].userid;

  return returnId;
}
console.log(returnIdByFirstName(users, "devid"));

console.log("*************************");
console.log("Q2");
function returnIdByLastName(users, felter) {
  let x = felter;
  let idFilter = users.filter((user) => user.lastname == x);
  let returnId = idFilter[0].userid;

  return returnId;
}
console.log(returnIdByLastName(users, "jacson"));

console.log("*************************");
console.log("Q3");
function returnFullNameByPhoneNumber(users, felter) {
  let x = felter;
  let fullNames = [];
  let idFilter = users.filter((user) => user.phonenumber == x);
  fullNames ={full :idFilter[0].firstname + " " + idFilter[0].lastname};
  return fullNames;
}

console.log(returnFullNameByPhoneNumber(users, "123456"));

let users2 = [
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
    address: " Irbid ",
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

console.log("*************************");
console.log("Q4");

function up25(users2) {
  let up25 = users2.filter((element) => element.age >= 25);

  return { up25: up25 };
}
console.log(up25(users2));

console.log("*************************");
console.log("Q5");

function less25(users2) {
  let less25 = users.filter((element) => element["age"] < 25);

  return { less25: less25 };
}
console.log(less25(users2));

console.log("*************************");
console.log("Q6");

function tax(users2) {
  let fullNames = [];
  let salBeforeTax = [];
  let salAfterTax = [];
  let jopTitle = [];

  let result = { options: [] };
  for (let i = 0; i < users2.length; i++) {
    fullNames.push(users2[i].firstName + " " + users2[i].lastName);
    salBeforeTax.push(users2[i].jobDescription.salary);
    salAfterTax.push(salBeforeTax[i] - users2[i].jobDescription.salary * 0.07);
    jopTitle.push(users2[i].jobDescription.title);
    result.options.push({
      name: fullNames[i],
      salary: salAfterTax[i],
      jopTitle: jopTitle[i],
    });
  }

  return result;
}

console.log(tax(users2));

console.log("*************************");
console.log("Q7");

function returnUsersByAddress(users2, felter) {
  let x = felter;
  let fullNames = [];
  let addressFilter = users2.filter((user) => user.address == x);
  fullNames.push(addressFilter[0].firstname + " " + addressFilter[0].lastname);
  return addressFilter;
}
console.log(returnUsersByAddress(users2, "Amman"));

console.log("*************************");
console.log("Q8");

function chickChildreen(users2) {
  let chickChild = users2.filter((user) => user.childreen.length >= 2);

  return { heHaveMore2Childreen: chickChild };
}
console.log(chickChildreen(users2));
console.log("*************************");
console.log("Q9");

function price(users2){
    let bp=[];

    let ap=[];
    let result = { options: [] };
    for (let i = 0; i < users2.length; i++){
        bp.push(users2[i].jobDescription.salary);
        ap.push(bp[i] + users2[i].jobDescription.salary * 0.05);
        result.options.push({salaryAfterPrice: ap[i]})
    }

    return result;
}

console.log(price(users2));

console.log("*************************");


console.log('bonus question is written up the page')