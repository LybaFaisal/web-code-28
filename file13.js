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

let arr4=[1,3,5,7,9,10];

arr4.pop();    //removing last element

console.log(arr4);

console.log("Logic 6 completed");