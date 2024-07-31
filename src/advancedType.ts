//// ユニオン型（または） ////

type Animal1 = {
  species: string;
};

type Human1 = {
  name: string;
};

type User = Animal1 | Human1;

const cat1: User = {
  species: 'ネコ科'
};

const human1: User = {
  name: 'さかい'
};


//// インターセクション型（かつ） ////

type Animal2 = {
  species: string;
  age: number;
};

type Human2 = Animal2 & {
  name: string;
};

const cat2: Animal2 = {
  species: 'ネコ科',
  age: 3
};
const human2: Human2 = {
  species: 'ホモ・サピエンス',
  age: 21,
  name: 'さかい'
};


//// オプショナルプロパティとユニオン型 ////

// 利便性に優れる
type Human3 = {
  name:string;
  age?: number;
};
// 省略が明示される
type Human4 = {
  name: string;
  age: number | undefined;
}


//// オプショナルチェイニングによるプロパティアクセス ////

// アクセスされるオブジェクトがnullやundefinedでも使用できる

type Human5 = {
  name: string;
  age: number;
};

function useMaybeHuman(human3: Human5 | undefined) {
  const age = human3?.age;
  console.log(age);
};

// ?.はそれ以外(上の例だとundefined)のプロパティアクセス
// ・関数呼び出し・メソッド呼び出しをまとめて飛ばす効果を持つ