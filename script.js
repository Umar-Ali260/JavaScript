console.log("Hello World");
let arr = [1,3, 5, 6, 12, 4 , 43, 11, 10];

// for(let i=0; i<arr.length; i++){
// console.log(`Array of index ${i} ${arr[i]}`);
// }

function traverseInArr(){
        let showData = document.getElementById('show-data').value;
        if(showData<arr.length){
        alert(arr[showData]);
    }else{
        alert("Enter a valid value");
    }
    }