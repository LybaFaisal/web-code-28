//Arrays Today
//Logic # 1

let num=[1,2,3,4,5,6,7,8];          //array num

for(let i=0 ; i<=num.length-1 ; i++)   //displaying through (length-1)
{
    console.log(num[i]);
}
console.log("Logic 1 Completed");
//Logic # 2

let numbers= [1,3,5,2,8,7,9];
for (let i=0 ; i<7 ; i++)              //Displaying Simple(through index)
{
    console.log(numbers[i]);
}
console.log("Logic 2 Completed");

//Logic # 3

let arr1=[2,4,6,7,10,12,14,16];

arr1[3]=8;                   //modifying array element

for(let i=0 ; i<7 ; i++)     //for(let i=0 ; i<arr1.length-1 ; i++)
{
    console.log(arr1[i]);
}
console.log("Logic 3 completed");

//Logic # 4

let arr2= [1,3,4,7,9,11,13,15];

arr2[2]=5; //modifying

for(let i=0; i<arr2.length-1; i++)
{
    console.log(arr2[i]);
}
console.log("Logic 4 completed");

//Logic # 5
//array.push

let arr3=[1,2,3,4,5,6,7];

arr3.push("Lyba");      //adding at last

console.log(arr3);

console.log("Logic 5 completed");

//Logic # 6
//array.pop

let arr4=[1,3,5,7,9,10];

arr4.pop();    //removing last element

console.log(arr4);

console.log("Logic 6 completed");

//Logic # 7
//array.shift
//Opposite to pop();
//remove the first element in the array

let arr5=[1,2,4,6,8,10,12,14,16,18,20];

arr5.shift();

console.log(arr5);

console.log("Logic 7 completed");

//Logic # 8
//Array.Unshift
//opposite to push();
//Add element at first

let arr6=[3,5,7,11,13,17,19,23,29];

arr6.unshift(2);

console.log(arr6);

console.log("Logic 8 completed");

//Logic # 9
//Array.splice()

let arr7=[1,2,3,4,5];

arr7.splice(1,1,6,9,8);     //(indexNo,Count,Additon of elements);

console.log(arr7);

console.log("Logic 9 completed");

//Logic # 10
//push 

let marks_of_students=[100,65,78,23,90];
marks_of_students.push(95);

console.log(marks_of_students);

console.log("Logic 10 completed");

//Logic # 11
//pop
//colours of rainbow

let rainbow=["red","yellow","orange","blue","green","purple","indigo"];
rainbow.pop();

console.log(rainbow);

console.log("Logic 11 completed");

//Logic # 12
//shift
//Remove the first people who have been waiting for so long

let people=["Ali","Ahmad","Sana","Lyba","Amina","Huda"];
people.shift();   //removing ali

console.log(people);

console.log("Logic 12 completed");

//Logic # 13
//To_Do_List
//adding a task at the start using Unshift()

let list=["Breakfast","University","ComputerClass","TeaTime","Practice","Sleep"];
list.unshift("morning walk");

console.log(list);

console.log("Logic 13 completed");

//Logic # 14
//Temperature Check By using Splice();

let city_temp=[37,67,98,12,-1,56,-45,34];
city_temp.splice(2,1,-30);

console.log(city_temp);

console.log("Logic 14 completed");

//Logic # 15
//Music Playlist push()

let music=["Throwback hits","Electronic Escape","feel good vibes","Workout Motivation"];
music.push("Celestial Beats"); //at end

console.log(music);

console.log("Logic 15 completed");