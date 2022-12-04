// eslintのエラーを消すためのコメントは共通ファイルを作成、このファイルの一番上、このファイルの該当箇所の前の行にコメントする
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faseShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faseShowFlag);
  };

  // useEffectの第二引数に[空の配列]を渡すことで初期の処理だけ行うことができる
  // useEffect(() => {
  // }, [])

  /** ある変数に対しての変化だけ見たいとき（numだけに関心を持たせたいので、）第二引数に設定している
   *  numのエラーは問題ない。（eslintの設定の問題のため = useEffectの中で使用している変数はすべて記載しないといけないんじゃない？ってこと）
   **/
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // 左がfalseの場合は右を実行する
        faseShowFlag || setFaceShowFlag(true);
      } else {
        // 左がtrueの場合は右を実行する
        faseShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    /* 複数行で記載したいときは、divでまとめる必要がある
     ** けど、不必要なタグになってしまうので、
     ** React.Fragmentを使用することができる
     ** それも長いので<>で代用できる
     */
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* 下記と同様の意味<ColorfulMessage color="blue" message="お元気ですか？"/>*/}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* &&の特性上左側がtrueであれば右を返す */}
      {faseShowFlag && <p>☺️</p>}
    </>
  );
};

export default App;
