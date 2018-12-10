var dataArr = ["hello", "world"];
var fetchData = function (arr, num) {
    return arr[num];
};
var p1 = function () {
    return new Promise(function (resolve) {
        var firstHalfWord = fetchData(dataArr, 0);
        setTimeout(function () {
            resolve(firstHalfWord + " ");
        }, 500);
    });
};
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
