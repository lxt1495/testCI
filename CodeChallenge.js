input = document.querySelector("input");
button = document.querySelector("button");

let number = NaN, turn = 3, end = false; 

input.addEventListener("input",(e)=>{
    if(e.target.value==="")return;
    number = Number(e.target.value);
    if(isNaN(number)||number<1||number>10){
        alert("Phải nhập số nằm trong khoảng từ 1 đến 10!", "Cảnh báo");
        number=NaN;
        e.target.value="";
    }
},false);

button.addEventListener("click",()=>{
    if(end){
        alert("Đã hết lượt chơi!", "Thông báo");
        return;
    }
    if(isNaN(number)){
        alert("Phải nhập số trước!", "Cảnh báo");
        return;
    }
    turn--;
    if(turn<=0)end=true;
    result = Math.floor(Math.random()*10+1);
    if(number===result){
        alert("Đã nhập đúng số!", "Kết quả");
        end=true;
    }
    else{
        alert(`Nhập sai số! Số đúng là ${result}\nBạn còn ${turn} lượt`, "Kết quả");
    }
},false);