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