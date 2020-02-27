let arr1 =[3,5,1,8,-3,7,8];
let arr2 = [7,12,6,9,20,56,89];
let arr3 = [];
let arr4 =[0,0,0,0,0,0];

function findminvalue(arrayx) {
    let length = arrayx.length;
    if (length==0) {
        document.getElementById('p1').innerHTML+= 'Mang nay '+arrayx+' la mang rong'+'<br>';
    } else {
        let min = arrayx[0];
        for (i=0;i<length;i++) {
            if (arrayx[i]<min) {min =arrayx[i];}
        }
        document.getElementById('p1').innerHTML+='Mang '+arrayx+' co gia tri nho nhat la '+min+'<br>';

    }

}
findminvalue(arr1);
findminvalue(arr2);
findminvalue(arr3);
findminvalue(arr4);

