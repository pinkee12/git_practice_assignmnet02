function checkprimenumber(n){
    var flag=true
    for(var i=2;i<n;i++){
        if(n%i==0){
            flag=false
        }
    }
    if(flag==true){
        console.log("Number is prime");
    }
    else{
        console.log("Number is not prime");
    }
}
checkprimenumber(5);