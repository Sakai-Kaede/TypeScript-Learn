//// スプレッド構文 ////

const obj1 = {
  foo: 123,
  bar: 456,
  baz: 789
};

const obj2 = {
  ...obj1,
  foo: -9999,
};

// obj1がコピーされた後に、fooが上書きされる
console.log(obj2);　// { foo: -9999, bar: 456, baz: 789 }と表示される


//// オブジェクトの型 ////

// objにカーソルを合わせると
// const obj: {
  // foo: number;
  // bar: string;
// }
// と表示される（型チェック）
const obj = {
  foo: 123,
  bar: 'Hello, World!'
};