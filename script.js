
//Problem 0 : Part A
var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    furcolor: 'white',
    weight: 8,
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }
   console.log(cat);
   console.log(cat.activities);

   //add height and weight to Fluffy
   cat.height = 1;
   cat.weight = 3;

   // update the name to Fluffyy
   cat.name = 'Fluffyy';

   //list the activities of cat's friends
   var x = cat.catFriends;

   //Print the catFriends names
for ( i in x){
    console.log(x[i].name);
}

//Print the total weight of catFriends
var sum = x.reduce((a,b)=>a.weight + b.weight);
console.log(sum);

//Print the total activities of all cats
console.log(`fluffy activities : ${cat.activities}`);
for (i in x){
    console.log(`${x[i].name}: ${x[i].activities}`);
}

//Add 2 more activities to bar & foo cats
x[0].activities.push('eat', 'repeat');
x[1].activities.push('pee', 'poo');
console.log(x[0]);
console.log(x[1]);

//update the fur colour to red
x[0].furcolor = 'red';
console.log(x[0]);
console.log(cat);


//Problem 0 : Part B
//Iterating with JSON object’s Values
var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [
    {
    date: '3/15/2019',
    damage_points: '5000',
    atFaultForAccident: true
    },
    {
    date: '7/4/2022',
    damage_points: '2200',
    atFaultForAccident: true
    },
    {
    date: '6/22/2021',
    damage_points: '7900',
    atFaultForAccident: true
    }
    ]
   }

   var a =myCar.accidents;

   for (i in a){
       a[i].atFaultForAccident = false;
   }

   console.log(a);

   for (i in a){
    console.log(a[i].date);
}
console.log(myCar);



//Problem 1 : Parsing an JSON object’s values:

var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllValues(obj) {
 console.log(Object.values(obj));
}

printAllValues(obj);




//Problem 2 : Parsing an JSON object’s values:
function printAllKeys(obj) {
    console.log(Object.keys(obj));
   }
   
   printAllKeys(obj);



//Problem 3 : Parsing an JSON object and convert it to a list
var obj2 = {name: 'ISRO', age: 35, role: 'Scientist'};

const arr = Object.keys(obj2).map((key) => [key, obj2[key]]);
console.log(arr);



//Problem 4 : Parsing a list and transform the first and last elements of it
var array = ['GUVI', 'I', 'am', 'Geek'];
function transformFirstAndLast(array) {
 var newObject = {}
newObject[array[0]] = array[array.length-1];
return newObject
   }
console.log(transformFirstAndLast(array));



//Problem 5 : Parsing a list of lists and convert into a JSON object:
var array1 = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

function fromListToObject(arr) {
 var newObject1 = {};
 for(i in arr){
     newObject1[array1[i][0]] = array1[i][1];
 }
 return newObject1;
}

console.log(fromListToObject(array1));



//Problem 6 : Parsing a list of lists and convert into a JSON object:
var securityQuestions = [
    {
    question: 'What was your first pet’s name?',
    expectedAnswer: 'FlufferNutter'
    },
    {
    question: 'What was the model year of your first car?',
    expectedAnswer: '1985'
    },
    {
    question: 'What city were you born in?',
    expectedAnswer: 'NYC'
    }
   ];

   console.log(securityQuestions[0].question);

   function chksecurityQuestions(securityQuestions,question,answer) {

if((question === securityQuestions[0].question) && (answer === securityQuestions[0].expectedAnswer)){
    
    console.log('Passed')
}else{
    console.log('Failed');
}

   }

var ques = 'What was your first pet’s name?';
var ans  =  'DufferNutter';
var status = chksecurityQuestions(securityQuestions, ques, ans);

console.log(status);



//Problem 7 : Parsing two JSON objects and Compare
var expected = {foo: 5, bar: 6};
var actual = {foo: 9, bar: 6};
var testName
function assertObjectsEqual(actual, expected, testName){

var testName = (JSON.stringify(expected) === JSON.stringify(actual));
return testName
}

console.log(assertObjectsEqual(actual, expected, testName));



//Problem 8 : Parsing JSON objects and Compare:
var array2 = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], 
             [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];

             var x = array2[0];
             var y = array2[1];
             console.log(x,y);

             function transformEmployeeData(arr) {
                var tranformEmployeeList = [];
                var obj1 ={};
                var obj2 ={}
                
                var x = arr[0];
                var y = arr[1];
                
                for(i in x){
                    obj1[x[i][0]] = x[i][1];
                }
                for(i in y){
                    obj2[y[i][0]] = y[i][1];
                }
                
                tranformEmployeeList.push(obj1,obj2);
               
                return tranformEmployeeList;
                
               }

               console.log(transformEmployeeData(array2));
               
            
   
//Problem 9 : Parsing JSON objects and Compare
var students = [
    {name: 'Siddharth Abhimanyu', age: 21}, { name: 'Malar', age: 25},
    {name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
    {name: 'Baahubali',age: 16},{name: 'AAK chandran',age: 23},   {name:'Gabbar Singh',age: 33},
    {name: 'Mogambo',age: 53},
    {name: 'Munnabhai',age: 40},{name: 'Sher Khan',age: 20},
    {name: 'Chulbul Pandey',age: 19},{name: 'Anthony',age: 28},
    {name: 'Devdas',age: 56} 
    ];

console.log(students[1].age);
    function returnMinors(arr)
{
    var res = [];
    for (i in arr){
if(arr[i].age<20){
    res.push(arr[i].name);
}
    }
    return res;
}

console.log(returnMinors(students));

