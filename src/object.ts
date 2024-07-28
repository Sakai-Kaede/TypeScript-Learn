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


// オプショナルなプロパティ宣言

// あってもなくてもよいプロパティを宣言

type MyObj = {
  foo: boolean;
  bar: boolean;
  baz?: number;
};

const obj5: MyObj = {foo: false, bar: true};
const obj6: MyObj = {foo: true, bar: false, baz: 1234};

console.log(obj5.baz); // [undefined]と表示される
console.log(obj6.baz); // [1234]と表示される


//// 部分型関係 ////

// 既存の型から必要な部分だけを抜き出して再利用できる
// 条件１： TがもつプロパティはすべてSにも存在する
// 条件２： 条件１の各プロパティについて、Sにおけるそのプロパティ
// 　　　　 の型はTにおけるプロパティの型の部分型（または同じ型）である

type T = {
  foo: string;
  bar: number;
};
type S = {
  foo: string;
  bar: number;
  baz: boolean;
};

const obj7: S = {
  foo: 'h1',
  bar: 1,
  baz: false
};
const obj8: T = obj7;


//// 配列 ////

const arr2: number[] = [1, 10, 100];

const arr3: Array<{
  name: string;
}> = [
  {name: '山田さん'},
  {name: '田中さん'},
  {name: '鈴木さん'}
];

// 読み取り専用

const arr4: readonly number[] = [1, 10, 100];
// arr4[1] = -500 エラーになる