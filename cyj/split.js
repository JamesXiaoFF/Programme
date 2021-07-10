var xlsx = require('node-xlsx');
var fs = require('fs');

function isLetter(str) {
    for (var i in str) {
        var asc = str.charCodeAt(i);
        if ((asc >= 65 && asc <= 90 || asc >= 97 && asc <= 122)) {
            return true;
        }
    }
    return false;
}

//读取文件内容
var obj1 = xlsx.parse(__dirname + '/01.xlsx')[0].data;
var obj2 = xlsx.parse(__dirname + '/02.xlsx')[0].data;
var obj3 = xlsx.parse(__dirname + '/03.xlsx')[0].data;
var obj4 = xlsx.parse(__dirname + '/04.xlsx')[0].data;
var obj5 = xlsx.parse(__dirname + '/05.xlsx')[0].data;
var obj6 = xlsx.parse(__dirname + '/06.xlsx')[0].data;
var obj7 = xlsx.parse(__dirname + '/07.xlsx')[0].data;
var obj8 = xlsx.parse(__dirname + '/08.xlsx')[0].data;
var obj0 = xlsx.parse(__dirname + '/00.xlsx')[0].data;
var A_data = []
var B_data = []
var A_set = []
var B_set = []
for (var i in obj1) {
    var value = obj1[i][17]
    if (value != undefined && isLetter(value)) {
        var temp = []
        temp.push(value, obj1[i][19], obj1[i][21], obj1[i][23], obj1[i][1], '法布雷20')
        B_set.push(value)
        B_data.push(temp)
    }
}
for (var i in obj2) {
    var value = obj2[i][18]
    if (value != undefined && isLetter(value)) {
        var temp = []
        temp.push(value, obj2[i][20], obj2[i][22], obj2[i][24], obj2[i][1], '法布雷21')
        B_set.push(value)
        B_data.push(temp)
    }
}
for (var i in obj3) {
    var value = obj3[i][18]
    if (value != undefined && isLetter(value)) {
        var temp = []
        temp.push(value, obj3[i][20], obj3[i][22], obj3[i][24], obj3[i][1], '戈谢20')
        B_set.push(value)
        B_data.push(temp)
    }
}
for (var i in obj4) {
    var value = obj4[i][18]
    if (value != undefined && isLetter(value)) {
        var temp = []
        temp.push(value, obj4[i][20], obj4[i][22], obj4[i][24], obj4[i][1], '戈谢21')
        B_set.push(value)
        B_data.push(temp)
    }
}
for (var i in obj5) {
    var value = obj5[i][17]
    if (value != undefined && isLetter(value)) {
        var temp = []
        temp.push(value, obj5[i][19], '无Lyso', obj5[i][21], obj5[i][1], '黏多糖20')
        B_set.push(value)
        B_data.push(temp)
    }
}
for (var i in obj6) {
    var value = obj6[i][17]
    if (value != undefined && isLetter(value)) {
        var temp = []
        temp.push(value, obj6[i][19], '无Lyso', obj6[i][21], obj6[i][1], '黏多糖21')
        B_set.push(value)
        B_data.push(temp)
    }
}
for (var i in obj7) {
    var value = obj7[i][18]
    if (value != undefined && isLetter(value)) {
        var temp = []
        temp.push(value, obj7[i][20], '无Lyso', obj7[i][22], obj7[i][1], '庞贝20')
        B_set.push(value)
        B_data.push(temp)
    }
}
for (var i in obj8) {
    var value = obj8[i][18]
    if (value != undefined && isLetter(value)) {
        var temp = []
        temp.push(value, obj8[i][20], '无Lyso', obj8[i][22], obj8[i][1], '庞贝21')
        B_set.push(value)
        B_data.push(temp)
    }
}
for (var i in obj0) {
    var value = obj0[i][9]
    if (isLetter(value)) {
        var temp = []
        temp.push(value, obj0[i][11], obj0[i][12])
        A_set.push(value)
        A_data.push(temp)
    }
}

var C_data = []
var D_data = []
var E_data = []

for (var i in A_data) {
    if (!B_set.includes(A_data[i][0])) {
        C_data.push(A_data[i])
    }
}

for (var i in B_data) {
    if (A_set.indexOf(B_data[i][0]) != -1) {
        var arr1 = B_data[i]
        var arr2 = A_data[A_set.indexOf(B_data[i][0])].slice(1)

        var arrsum = arr1.concat(arr2)
        D_data.push(arrsum)
    }
    if (!A_set.includes(B_data[i][0])) {
        E_data.push(B_data[i])
    }
}

var buffer1 = xlsx.build([
    {
        name: 'sheet1',
        data: C_data
    }
]);
var buffer2 = xlsx.build([
    {
        name: 'sheet1',
        data: D_data
    }
]);
var buffer3 = xlsx.build([
    {
        name: 'sheet1',
        data: E_data
    }
]);
//将文件内容插入新的文件中
fs.writeFileSync('test1.xlsx', buffer1, { 'flag': 'w' });
fs.writeFileSync('test2.xlsx', buffer2, { 'flag': 'w' });
fs.writeFileSync('test3.xlsx', buffer3, { 'flag': 'w' });
