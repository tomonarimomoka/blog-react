import { FC } from "react";
import {ArticalPage , SubTitle , ReadBtn , CustomTable , Img_30} from './Parts';

export const Index: FC = () => {
  return(
    <ArticalPage title="💗ようこそ！かわいいてっくももかへ💗">
      <ReadBtn msg="English" url="/IndexEn" />
      <SubTitle subTitle="♥このブログについて" />
      <p>
        このブログはエンジニア役に立つことを目指しています。
      </p>
      <p>
        まだまだ勉強中の身ですが、私が困った等身大のトピックで誰かの助けになるかもしれないと考えて、背伸びせずに、自分が欲しかった記事を作成しています。
        一人のエンジニアがどう成長していくかを見ることで、後輩エンジニアたちのモデルケースとして参考になればいいなと考えています。
      </p>
      <p>
        日本語の記事を増やすことで日本の技術力に貢献したいと考えています。
      </p>
      <SubTitle subTitle="♥お勧めの記事" />
      <ul>
        <li>ブラックボックステストのテスト技法<ReadBtn url="/SimpleTest" /></li>
        <li>一浪日大でもホワイト企業に就職する方法<ReadBtn url="/JobHuntting" /></li>
        <li>【生成AI】ハッカソン参加レポート vol.1<ReadBtn url="/Hakkason_1" /></li>
        <li>【発表】LT会参加レポート<ReadBtn url="/FirstLTparty" /></li>
      </ul>
      <SubTitle subTitle="本サイト「かわいいテックももか」の歴史" />
      <CustomTable>
        <tr><th>いつ</th><th>どうした</th></tr>
        <tr><td>2023.10</td><td>「かわいいテック　ももか」開設！</td></tr>
        <tr><td>2024.7</td><td>10記事達成</td></tr>
        <tr><td>2025.4</td><td>20記事達成</td></tr>
        <tr><td>2025.5</td><td>TypeScrip×Reactにシステムリプレイス<ReadBtn url="/HowToMigrateBlog" /></td></tr>
      </CustomTable>
      <SubTitle subTitle="♥筆者について" />

      <h3>■自己紹介</h3>
      <p>
        プログラミングが好きなソフトウェアエンジニアです。    
      </p>
      <p>
        就職して3年目のソフトウェアエンジニアです。学生時代からプログラミングに興味を持ち、独学やインターンで学びプログラマーとしてアルバイトもしていました。
        その後就職してJavaやSVNを使うようなレガシーなシステムを開発しました。ソフトウェアエンジニアとして働きつつ東京大学松尾・岩澤研究室でLLMについて学びました。
        現在はAIを活用したシステムを作る仕事をしています。バックエンドが専門ですがフロントエンドも時々やります。このWebサイトも自分で作りました。
      </p>
      <p>
        モットーは「行動せざる者、願うべからず」です。（そんなことわざないですが、私が作りました。）
      </p>
      <h3>■経歴</h3>
      <p>
        私のエンジニアになるまでの軌跡は
        「一浪日大でもホワイト企業に就職する方法」<ReadBtn url="/jobHuntting" />
        をご覧ください✨
      </p>
      <p>
        最近転職をしました。
        転職に関する詳細は「初めて転職」<ReadBtn url="/FirstCareerChange" />
        をご覧ください。
      </p>
      <h3>■保有資格・試験</h3>
      <ul>
        <li>ITパスポート試験</li>
        <li>Oracle Certified Java Programmer, Silver SE11（通称：Java Silver）</li>
        <li>Bronze DBA Oracle Database Fundamentals（通称：Oracle Master Bronze）</li>
        <li>基本情報技術者試験</li>
        <li>生成AIパスポート試験</li>
        <li>東京大学 松尾・岩澤研究室 大規模言語モデル 2024 修了</li>
        <li>AWS（通称：AWS CLF）</li>
        {/* FIXME：↑↑↑正式名称↑↑↑ */}
      </ul>
      <Img_30 path="./assets/SILVSE11JPN.jpg" alt="認定バッチ"/>
      <Img_30 path="./assets/BRZDBA19CJPN.jpg" alt="認定バッチ" />
      <Img_30 path="./assets/generative-ai-passport-logo.png" alt="認定バッチ" />
        {/* FIXME：認定バッチ */}
    </ArticalPage>
  );
}