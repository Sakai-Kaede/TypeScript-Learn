// ### constについて ###

// constで宣言した変数の中身は、その後変わらない
// そのため、letを使ったコードに比べて読む負担が減る
// ## 目標 ## 9割り以上の変数をconstで宣言する
const massage: string = 'Hello, World!';
console.log(massage);

// ## 注意 ## オブジェクトの中身を書き換えるのは、constに制限されない
// 既存のオブジェクトの書き換えを行わないように意識しよう
const arr = [1, 2, 3];
arr[0] = 5;
console.log(arr); // [ 5, 2, 3 ] と表示される