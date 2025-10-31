import { FC } from "react";
import {ArticalPage , SubTitle , SourceCode , References_link } from '../Parts';

export const Index: FC = () => {
  return(
    <ArticalPage title="特定のサイトを除いて検索する方法【条件付き検索】">
      <SubTitle subTitle="はじめに" />
      <p>
        技術に関する記事を探しているんだけどQiitaばかり出てきてそれ以外を見たいときなど、条件付きで検索エンジンを探したい時がありますよね。
        {/* 特に仕事でエビデンスや参考元をを提示するときには「LLM」が言っていたのでというわけにはいかないので参照元を見つける必要がありますね。 */}
        本記事では検索エンジンをで条件付き検索
      </p>
      <SubTitle subTitle="条件付き検索のルール" />
      FIXME：例をちゃんと入れる
      <SubTitle subTitle="すぐできる" />
      <h3>Qiitaを除いて検索する方法</h3>
      <SourceCode>+</SourceCode>
      <h3>侍エンジニアを除いて検索する方法</h3>
      <SourceCode>+</SourceCode>
      <h3>特定ドメインのみで検索する方法</h3>
      <SourceCode>+</SourceCode>
      <h3>特定ファーストドメインを除外して検索する方法</h3>
      <SourceCode>+</SourceCode>
      
      <SubTitle subTitle="おわりに" />
      <p>
        限定検索はマスター出来ましたか？限定検索を駆使して賢く検索エンジンを駆使しましょう。
      </p>
      <h3>参考</h3>
      <References_link url="https://devo.jp/seolaboratory/65768/" articleTitle="検索オプションとは？Google検索をもっと便利にするコマンドまとめ"/>
      <References_link url="https://support.google.com/websearch/answer/2466433" articleTitle="Google 検索の結果を絞り込む"/>
    </ArticalPage>
  );
}