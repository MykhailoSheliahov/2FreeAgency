var arrow = document.getElementById("arrow");
console.log(arrow);
var login = document.getElementsByClassName("login")[0];
var close = document.getElementsByClassName("close")[0];
console.log(close);
var count = 1;
arrow.addEventListener("click",function(event){
    count++;
    if(count%2==0){
        login.style.display='none';
    }
    else if(count%2!=0) {
        login.style.display = 'block';
    }
});

    close.addEventListener("click",function(event){
    login.style.display='none';

});
