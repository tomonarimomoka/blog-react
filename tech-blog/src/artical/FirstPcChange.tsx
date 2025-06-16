import { FC } from "react";
import {ArticalPage , SubTitle , ReadBtn , References_link } from '../Parts';

export const Index: FC = () => {
  return(
    <ArticalPage title="はじめてのPC交換">
      <SubTitle subTitle="test" />
      <p>
        私は大学入学の時に買ったPCを交換しようと考えている。大学入学時はエンジニアになるなんてつゆ知らず、よくわからず買ったので8Gとかなり低スペック。
        それでも、このPCでたくさん勉強して来たし、名残惜しい（面倒）とおもい使い始めて６年！
        エンジニアを目指していたこともありたくさんの言語や開発環境構築を行っていたため、フォルダは知っちゃかめっちゃかで、何故かプロファイルが複数ある状態。
        動作も重く、キーボードの面が剥がれてガムテープで補強して何とか使っていました。いつ壊れるかわからないという恐怖からソースコードのGit管理はきっちりやりました(笑)
      </p>
      <p>
        さて、PCをプライベートで交換するのが初めての私が欲しかった記事を書いていきます。
      </p>
      
      <SubTitle subTitle="フォルダを整理せよ" />
      


      <References_link url="" articleTitle=""/>
      <ReadBtn url="" msg=""/>
    </ArticalPage>
  );
}