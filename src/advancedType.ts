// ユニオン型

type Animal = {
  species: string;
};

type Human = {
  name: string;
};

type User = Animal | Human;

const cat: User = {
  species: 'ネコ科'
};

const human: User = {
  name: 'さかい'
};

// 以下はエラーになる
// const book: User = {
//   title: 'Software Design plus'
// };