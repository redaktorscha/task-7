var dataArr = ["hello", "world"];
// забирает данные из массива
var fetchData = function (arr, num) {
    return arr[num];
};
// промис возвращает первую часть строки "hello world!"
var p1 = function () {
    return new Promise(function (resolve) {
        var firstHalfWord = fetchData(dataArr, 0);
        setTimeout(function () {
            resolve(firstHalfWord + " ");
        }, 2500);
    });
};
// промис возвращает вторую часть строки "hello world!"
var p2 = function (txt) {
    return new Promise(function (resolve) {
        var secondHalfWord = fetchData(dataArr, 1);
        setTimeout(function () {
            resolve(txt += secondHalfWord + "!");
        }, 1000);
    });
};
p1()
    .then(p2)
    .then(console.log);
