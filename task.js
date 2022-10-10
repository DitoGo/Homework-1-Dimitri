// Task 1 :
// ანა არის 28 წლის , ხოლო მისი ძმა ლევანი 21ის .

// გამოიყენეთ ცვლადები , რომელშიც შეინახავთ თითოეულის ასაკს და სახელს.
// განსაზღვრეთ ახალი სტრინგ ტიპის ცვლადი რომელიც შეინახასვს ტექსტს :
// 'ანა ლევანზე 7 წლით უფროსია'
// სხვაობა დათვალეთ დინამიურად ცვლადების და არითმეტიკული ოპერატორების გამოყენებით
// დალოგეთ ზემოაღნიშნული ცვლადი .
let ann = {
    firstName: "Ana",
    age: 28,
}

let levan = {
    firstName: "Levan",
    age: 21,
}
let minusDiff = ann.age - levan.age;


let diffBetween = `${ann.firstName} levanze ${minusDiff} wlit ufrosia`;

console.log(diffBetween)




/*
    Task 2 : 
        გვაქვს სტუდენტების სახელების მასივი ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
        დალოგეთ სიის ზუსტად შუაში მყოფი სახელი.

*/
let students = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']

let middleStudent = (students.length-1) / 2;

console.log(middleStudent)

console.log(students[middleStudent])
/*
    Task 3 : 
    Part 1 : შექმენით სტუდენტის ობიექტი , რომელსაც აქვს 5 property : firstName; lastName; age; subjects; roommate;
    firstname,lastname - string type
    age - number
    subject - object (array of strings)
    roommate - object (რომელსაც აქვს თავის მხრივ ორი property : fullname , age )

    მნიშვნელობები მიანიჭეთ ტიპების მიხედვით . subject- მასივი უნდა შედგებოდეს არანაკლებ 5 ელემენტისგან

    Part 2 : 
        for ციკლის გამოყენებით დალოგეთ თუ რა საგნებს სწავლობს სტუდენტი , subject arrayს ელემენტები.

        ასევე შექმენით ახალი ცვლადი fullName რომელშიც შეინახავთ სტუდენტის სრულ სახელ და გვარს.

        ეს fullName მნიშვნელობასთან ერთად დაამატეთ სტუდენტის ობიექტს. 
         
        დაამატეთ ცვლადი result რომლის მნიშვნელობაც იქნება წინადადება : 
            ' (სტუდენტის სახელი და გვარი) არის age წლის და მისი რუმმეითი არის : roommate fullname
        

*/
let myStudent = {
    firstName: "Dimitri",
    lastName: "Gogilashvili",
    age: 23,
    subjects: ["matematika", "qimia", "biologia", "fizika", "qartuli"],
    roommate: {
        firstName: "Giorgi",
        age: 25,
    }
}
for(i=0; i<myStudent.subjects.length-1; i++) {
    console.log(myStudent.subjects[i])  
}

let fullName = myStudent.firstName + " " + myStudent.lastName;
myStudent.fullName = fullName;

console.log(myStudent)

let result = `${fullName} aris ${myStudent.age} wlis da misi roommate aris ${myStudent.roommate.firstName}`;
console.log(result);

/*
    Task 4 : 
        გვაქვს  მასივი : ["Banana", "Orange", "Apple", "Mango",2,12]
        გამოიყენეთ while ციკლი და მანამ სანამ მასივის ელემენტის ტიპი არის სტრინგი
        დალოგეთ ეს ელემენტი.

*/
let fruitMassive = ["Banana", "Orange", "Apple", "Mango",2,12];
let z=0;
while(typeof fruitMassive[z] === "string"){
    console.log(fruitMassive[z])
    z++
    
}
/*
    Task 5 : 
    გვაქვს მასივი : [12,23,43,11,9,2,121,90]
    თუ მასივის ელემენტი მეტია 31ზე და თან არის ლუწი მაშინ დალოგეთ : 'Element is greater than provided value and is EVEN'
    თუ მასივის ელემენტი ნაკლებია 31ზე და თან არის კენტი მაშინ დალოგეთ : 'Element is less than provided value and is ODD'

*/
let oddOrEven = [12,23,43,11,9,2,121,90];

for(let j = 0; j < oddOrEven.length; j++ )  {
    if(oddOrEven[j] > 31 && oddOrEven[j] % 2  == 0) {
        console.log('Element is greater than provided value and is EVEN')
    } else if(oddOrEven[j] < 31 && oddOrEven[j] % 2 != 0){
       console.log('Element is less than provided value and is ODD')
    }
}


//part 2

//Task 1
/*
    შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
    ფუნქციას გადაეცით ობიექტი არგუმეტნად 
    
    let sampleObject = {
        isItarable : false,
        sampleArray : [12,63,21,34,98,57]
    }
    თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
    თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"

*/
 
let sampleObject = {
    isItarable : false,
    sampleArray : [12,63,21,34,98,57]
}

const iterable = function(obj) {
    if(obj.isItarable){
        for(let el of obj.sampleArray){
            console.log(el)
        }
    } else {
        console.log("provided array isn't itarable");
    }
}
console.log(iterable(sampleObject))
//Task 2
/*
    შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
    ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
    აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
    თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
    წინააღმდეგ შემთხვევაში false
    
*/
function checkPythagoras(x, y, z){
    if(x**2 + y**2 == z**2){
        console.log("true")
    } 
}
checkPythagoras(3, 4, 5)

//Task 3
/*
    დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
    და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
    მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
    დააბრუნოს "Min value is 2 and Max value is 75"
*/
let numberArr = [2,14,25,75,11,6];

function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for(let i =0; i<numberArr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min) {
            min = arr[i]
        }
    }
    return `min value is ${min} and max value is ${max}`
}

console.log(minMax(numberArr))
//Task 4

/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/
function checkAngle (angle){
    if(angle > 0 && angle < 90){
        console.log("Acute Angle")
    } else if (angle == 90) {
        console.log("Right angle")
    } else if (angle > 90 && angle < 180) {
        console.log("Obtuse angle")
    } else if (angle == 180) {
        console.log("Straight angle")
    }

}
    checkAngle(92)

// function checkDeg (deg) {

// }

// checkDeg(92)

//Task 5
/*
    დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
    მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
    ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
    ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
    მიღებული მასივი დააბრუნებინეთ ფუნქციას .

    0-50 = F
    51-60 = E
    61-70 = D
    71-80 = C
    81-100 = A

    საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
    [{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ]


*/
