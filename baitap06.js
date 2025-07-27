let a = +prompt("Mời bạn nhập vào số a");
let b = +prompt("Mời bạn nhâp vào số b");
let pheptinh = prompt("Mời bạn nhập vào phép tính:+, -, *, /");
let ketqua;
if (pheptinh === "+") {
    ketqua = a + b;
} else if (pheptinh === "-") {
    ketqua = a - b;
} else if (pheptinh === "*") {
    ketqua = a * b;
} else if (pheptinh === "/") {
    ketqua = a / b;
}  else {ketqua = "Nội dung nhập vào không hợp lệ"}
if (typeof ketqua ==="string") {
    alert(ketqua);
} else {
alert(`Kết quả của các phép tính trên là: ${a}  ${pheptinh} ${b}  =  ${ketqua}`);
}