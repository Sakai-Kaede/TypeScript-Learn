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
const obj3 = {
  foo: 123,
  bar: 'Hello, World!'
};

// type文

// オブジェクトの型は直接書くと長いため、type文で別名を書くのが定石

type FooBarObj = {
  foo: number;
  bar: string;
};

const obj4: FooBarObj = {
  foo: 123,
  bar: 'Hello, World!'
};