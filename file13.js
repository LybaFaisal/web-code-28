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

//Logic # 16
//pop(),to remove the last book from the shelf

let Novels=["Namal","Jannat ke pattay","Mushaf","Bakht","Mala"];
Novels.pop(); //removing the last

console.log(Novels);

console.log("Logic 16 completed");

//Logic # 17
//shift()

console.log("Lyba is the first student who has done with her registeration");
//lets remove her

console.log("There are many students are standing for their registeration");
let queue=["Lyba","Sana","Saima","Munala","Hamna","Zunaira","Fatima"];
console.log(queue);

console.log("After  removing Lyba, Girls who have not done their registeration are=");

queue.shift();

console.log(queue);

console.log("Logic 17 completed");

//Logic # 18
//unshift a new employee

console.log("Employees in the company are:");
let employee=["Max","Plank","Robert","Bohr"];
console.log(employee);

console.log("The new employee who will lead his team is:"); //adding a new one at start

employee.unshift("Alice");
console.log(employee);
console.log("Logic 18 completed");

//Logic # 19
//Push & Pop

let stack_of_plates=[];
stack_of_plates.push("Dessert1","Dessert2","Dessert3");

console.log(stack_of_plates);
//removing one by one
stack_of_plates.pop();
console.log(stack_of_plates);
stack_of_plates.pop();
console.log(stack_of_plates);
stack_of_plates.pop();
console.log(stack_of_plates);

console.log("Logic 19 completed");

//Logic # 20
//shift & Unshift
//pushing firstly

let customers=[];
customers.push("Customer1","Customer2","Customer3");
console.log("The customers in the queue are:");
console.log(customers);

//shifting (removing the 1st)
customers.shift();
console.log(customers);

//unshifting (adding at the first)
customers.unshift("New Customer");
console.log("After adding new customer");
console.log(customers);

console.log("Logic 20 completed");

//Logic # 21
//splice

console.log("To Do List for today");
let Task=["t1","t2","Cancelled Task","LastTask"];
console.log(Task);

Task.splice(2,1,"New Task");
console.log(Task);

console.log("Logic 21 completed");

//Logic # 22
//Push & Shift

let messages=["Message1","Message2","Message3"];
console.log(messages);
messages.push("Hi","How are You?");
console.log(messages);

//using shift() to remove the oldest message

messages.shift();
console.log(messages);
console.log("Logic 22 completed");

//Logic # 23
//Unshift & Pop

let timeline= ["Ancient Civilization"];
console.log("The outdated timeline in the history:");
console.log(timeline);

timeline.unshift("Middle Ages");
console.log(timeline);

console.log("The Updated timeline in the history:");
timeline.pop();
console.log(timeline);

console.log("Logic 23 completed");

//Logic # 24
//Mixed Array Operations

let Music_Stream= ["song1","song2","song3"];

Music_Stream.push("song4","song5");

console.log(Music_Stream);
Music_Stream.shift();
console.log("After removing first:");
console.log(Music_Stream);

console.log("After adding at first:");
Music_Stream.unshift("New Song");
console.log(Music_Stream);

console.log("After removing last:");
Music_Stream.pop();
console.log(Music_Stream);

console.log("After replacing song2 with Updated song:");
Music_Stream.splice(1,1,"Updated Song");
console.log(Music_Stream);

console.log("Logic 24 completed");

//Logic # 25
//Mixed Arrays 2

let Books=["BookA","BookB","BookC","BookD","BookE"];
console.log("The initial books are:");
console.log(Books);

console.log("After removing last bookE:");
Books.pop();
console.log(Books);

console.log("After adding BookX to the first");
Books.unshift("BookX");
console.log(Books);

console.log("After adding two new books at the end:");
Books.push("BookF","BookG");
console.log(Books);

console.log("After replacing BookY by BookA:")
Books.splice(1,1,"BookY");
console.log(Books);

console.log("After removing first book:");
Books.shift();
console.log(Books);

console.log("Logic 25 completed");

//Logic # 26
//Mixed array operations # 3
//Managing a catalog of an E-Commerce website

let ecommerce=["itemA","itemB","itemC","itemD","itemE"];
console.log("The previous catalog of this website is:");
console.log(ecommerce);

ecommerce.push("itemX","itemY");
console.log("Adding two new items in the catalog:");
console.log(ecommerce);

ecommerce.unshift("NewItem");
console.log("The new item is added to the start by using unshift:");
console.log(ecommerce);

ecommerce.pop();
console.log("The last item is popped from the last of the catalog:");
console.log(ecommerce);

ecommerce.shift();
console.log("The first item is popped by using shift:");
console.log(ecommerce);

ecommerce.splice(0,3,"Updated Item-1","Updated Item-2","Updated Item-3");
console.log("After updating:");
console.log(ecommerce);

ecommerce.push("ItemP","ItemQ");
console.log("Adding two new items in the catalog:");
console.log(ecommerce);

ecommerce.shift();
console.log("The first item is popped by using shift:");
console.log(ecommerce);

ecommerce.unshift("NewArrival");
console.log("The new item is added to the start by using unshift:");
console.log(ecommerce);

ecommerce.pop();
console.log("The last item is popped from the last of the catalog:");
console.log(ecommerce);

//Logic # 27
//Mixed Op # 4
//Travel destinations

let travel=[];

travel.unshift("Starting point");
console.log("Adding a starting point in the journey:");
console.log(travel);

travel.push("New Destination X", "New Destination Y");
console.log("Adding two new destinations in the journey:");
console.log(travel);

travel.shift();
console.log("Removing the first destination:");
console.log(travel);

travel.pop();
console.log("Removing the last destination:");
console.log(travel);

//Logic # 28
//Mixed Array Op # 5

let recipe_book=[];
recipe_book.unshift("Special Breakafast");
console.log("The initial recipe in my book is:");
console.log(recipe_book);

recipe_book.push("Dessert Delight", "Savory Surprise");
console.log("The two new recipe in my book:");
console.log(recipe_book);

recipe_book.shift();
console.log("After removing the first recipe:");
console.log(recipe_book);

recipe_book.pop();
console.log("After removing the last one:");
console.log(recipe_book);