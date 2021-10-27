var myArray = [];
// Bài 1
function getElementNum() {
    var num = Number(document.querySelector("#num1").value);
    var values = Number(num);
    myArray.push(values);
    document.querySelector("#txtResult1").innerHTML = "Mảng là: " + myArray;
}
document.querySelector("#btnAdd").onclick = getElementNum;

function sumNumBer() {
    var tong = 0;
    for (var i = 0; i < myArray.length; i++) {
        tong += myArray[i];
    }
    document.querySelector("#txtResult1").innerHTML = "Tổng là: " + tong;
}
document.querySelector("#btnSum").onclick = sumNumBer;


// Bài 2
function countMyArray() {
    var count = 0;
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] > 0) {
            count++;
        }
    }
    document.querySelector("#txtResult2").innerHTML = "Mảng có : " + count + " số dương.";
}
document.querySelector("#btnCount").onclick = countMyArray;

// Bài 3
function findNumber() {
    var min = myArray[0];
    for (var i = 1; i < myArray.length; i++) {
        if (min > myArray[i]) {
            min = myArray[i];
        }
    }
    document.querySelector("#txtResult3").innerHTML = "Số nhỏ nhất mảng là: " + min;
}
document.querySelector("#btnFind").onclick = findNumber;

// Bài 4
function findNumberMin() {
    var minDuong = myArray[0];
    for (var i = 1; i < myArray.length; i++) {
        if (myArray[i] > 0 && minDuong > myArray[i]) {
            minDuong = myArray[i];
        }
    }
    document.querySelector("#txtResult4").innerHTML = "Số dương nhỏ nhất mảng là: " + minDuong;
}
document.querySelector("#btnFindMin").onclick = findNumberMin;

// Bài 5
function findNumberDuongCuoi() {
    var duongCuoi = myArray[0];
    for (var i = 1; i < myArray.length; i++) {
        if (myArray[i] % 2 == 0) {
            duongCuoi = myArray[i];
        } else {
            duongCuoi = -1;
        }
    }
    document.querySelector("#txtResult5").innerHTML = "Số chẵn cuối cùng của mảng là: " + duongCuoi;
}
document.querySelector("#btnFindChanCuoi").onclick = findNumberDuongCuoi;

// Bài 6
function changeNumber() {
    var num1 = Number(document.querySelector("#numIndex1").value);
    var num2 = Number(document.querySelector("#numIndex2").value);
    var newArray = [];
    // for(var i=0;i<myArray.length;i++){
    //     var temp=myArray[i];
    //     newArray.push(temp);
    // }
    for (var i = 0; i < myArray.length; i++) {
        var temp = myArray[num1];
        myArray[num1] = myArray[num2];
        myArray[num2] = temp;
        var viTri1 = num1;
        var viTri2 = num2;
        document.querySelector("#txtResult6").innerHTML = `Mảng ban đầu là: ${myArray} vị trí 1: ${viTri1} vị trí 2: ${viTri2}`;
    }
}
document.querySelector("#btnChange").onclick = changeNumber;

// Bài 7
function sortNumber() {
    for (var i = 0; i < myArray.length; i++) {
        for (var j = 0; j < myArray.length - 1; j++) {
            if (myArray[j] > myArray[j + 1]) {
                var temp = myArray[j];
                myArray[j] = myArray[j + 1];
                myArray[j + 1] = temp;
            }
        }
    }
    var newArray = [];
    for (var i = 0; i < myArray.length; i++) {
        var values = myArray[i];
        newArray.push(values);
    }
    document.querySelector("#txtResult7").innerHTML = "Sắp xếp mảng : " + newArray;
}
document.querySelector("#btnSort").onclick = sortNumber;


//Bài 8
// function kiemTraSNT() {
//     var snt
//     for(var i=0;i<myArray.length;i++){
//     }
//         for (var i = 2; i < snt / 2; i++) {
//             if (snt % i == 0) {
//                 console.log("Tìm ko thấy")
//                 return false;
//             }
//             console.log("Tìm thấy")
//             return true;
//         }
// }
// document.querySelector("#btnSNT").onclick = kiemTraSNT;

// Bài 9
var newMyArray = [];
function addElement() {
    var num = Number(document.querySelector("#numN").value);
    var temp = num;
    newMyArray.push(temp);
    document.querySelector("#txtResultAdd").innerHTML = newMyArray;
}
document.querySelector("#btnAddN").onclick = addElement;

function countN() {
    var count = 0;
    for (var i = 0; i < newMyArray.length; i++) {
        if (Number.isInteger(newMyArray[i]) == true) {
            count++;
        }
    }
    document.querySelector("#txtResultCount").innerHTML = "Mảng có : " + count + " số nguyên.";
}
document.querySelector("#btnCountN").onclick = countN;


//Bài 10
function compareNumber() {
    var countDuong = 0;
    var countAm = 0;
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] > 0) {
            countDuong++;
        } else {
            countAm++;
        }
    }
    if (countDuong == countAm) {
        document.querySelector("#txtResult10").innerHTML = "Số Dương = Số Âm";
    } else if (countDuong > countAm) {
        document.querySelector("#txtResult10").innerHTML = "Số Dương > Số Âm";
    } else if (countDuong < countAm) {
        document.querySelector("#txtResult10").innerHTML = "Số Dương < Số Âm";
    }
}
document.querySelector("#btnCompare").onclick = compareNumber;