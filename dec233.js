!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <Script>
        var n, i=2, isPrime=1;
        n=parseInt(prompt("Enter any no"));
        while(i<n){
            if(n%i==0){
                isPrime=0;
                break;
            }
            i=i+1;
        }
        if(isPrime==1 || n==2)
        document.write("<br>" +n+" is prime no.")
         else
        document.write("<br>" +n+" is not a prime no.")

    </Script>

    
    
</body>
</html>
