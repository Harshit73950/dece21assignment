alert("This program will find the maximun among three number using Array")
            let arr=[];
            for (let i=0;i<'3';i++){
                let number= parseFloat(prompt("enter number " + parseInt(i+1)));
                arr.push(number)
            }
            alert(Math.max(arr[0],arr[1],arr[2]))
 
         