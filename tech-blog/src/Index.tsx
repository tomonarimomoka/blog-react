import { FC } from "react";
import {ArticalPage , SubTitle , ReadBtn , CustomTable , Img_30} from './Parts';
import './style.css'

export const Index: FC = () => {
  return(
    <ArticalPage title="💗ようこそ！かわいいてっくももかへ💗">
      <SubTitle subTitle="♥このブログについて" />
      <p>
        このブログはエンジニア役に立つことを目指しています。
      </p>
      <p>
        まだまだ勉強中の身ですが、私が困った等身大のトピックで誰かの助けになることもあるかもしれない考えて、背伸びせずに私が欲しかった記事を作成します。
      </p>
      <p>
        一人のエンジニアがどう成長していくかを見ることで、後輩エンジニアたちのモデルケースとして参考になればいいなと考えています。
      </p>
      <SubTitle subTitle="♥お勧めの記事" />
      <ul>
        <li>ブラックボックステストのテスト技法<ReadBtn url="/SimpleTest" msg="読む" /></li>
        <li>一浪日大でもホワイト企業に就職する方法<ReadBtn url="/JobHuntting" msg="読む" /></li>
        <li>【生成AI】ハッカソン参加レポート vol.1<ReadBtn url="/Hakkason_1" msg="読む" /></li>
        <li>【発表】LT会参加レポート<ReadBtn url="/FirstLTparty" msg="読む" /></li>
      </ul>
      <SubTitle subTitle="本サイト「かわいいテックももか」の歴史" />
      <CustomTable>
        <tr><th>いつ</th><th>どうした</th></tr>
        <tr><td>2023.10</td><td>「かわいいテック　ももか」開設！</td></tr>
        <tr><td>2024.7</td><td>10記事達成</td></tr>
        <tr><td>2025.4</td><td>20記事達成</td></tr>
        <tr><td>2025.5</td><td>TypeScrip×Reactにシステムリプレイス<ReadBtn url="/HowToMigrateBlog" msg=""></ReadBtn></td></tr>
      </CustomTable>
      <SubTitle subTitle="♥筆者について" />

      <h3>■自己紹介</h3>
      <p>
        プログラミングが好きなソフトウェアエンジニアです。    
      </p>
      <p>
        以前はプログラマーをやっていました。
        ソフトウェアエンジニアになってから、プログラミング以外のITの知識が全然足りなくて、勉強中です。
      </p>
      <p>
        モットーは「行動せざる者、願うべからず」です。（そんなことわざないですが、私が作りました。）
      </p>
      <h3>■経歴</h3>
      <p>
        私のエンジニアになるまでの軌跡は
        <a href="/src/jobHuntting.html" >一浪日大でもホワイト企業に就職する方法</a>
        をご覧ください✨
      </p>
      {/* <CustomTable>
        <tr><th>いつ</th><th>どうした</th></tr>
        <tr><td>2018年3月</td><td>高校卒業</td></tr>
        <tr><td>2018年4月~2019年2月</td><td>四谷学院で浪人</td></tr>
        <tr><td>2019年4月</td><td>日本大学入学する。物理学を専攻</td></tr>
        <tr><td>2021年3月~2023年3月</td><td>プログラマーの長期インターンでJava , C# , プログラミングの思考を学ぶ</td></tr>
        <tr><td>2021年8月~2022年11月</td><td>プログラマーのバイトで C# を学ぶ</td></tr>
        <tr><td>2022年2月~2023年3月</td><td>研究室で研究頑張る🔥python , Shell Script , 量子力学を学ぶ</td></tr>
        <tr><td>2023年3月24日</td><td>物理学会で発表✨</td></tr>
        <tr><td>2023年3月</td><td>日本大学を卒業</td></tr>
        <tr><td>2023年4月</td><td>ソフトウェアエンジニアとして就職</td></tr>
        <tr><td>2023年8月</td><td>念願の製品開発チームに配属され、Javaでゴリゴリ開発</td></tr>
        <tr><td>2024年4月</td><td>昇格する✨</td></tr>
        <tr><td>2024年9月</td><td>製品開発チームので別製品を作り始める。TypeScript×React , AWSを学ぶ🔥</td></tr>
        <tr><td>2024年9月~2025年1月</td><td>東京大学 松尾・岩澤研究室 大規模言語モデル 2024 受講＆修了✨</td></tr>
        <tr><td>2025年4月</td><td>AI専門の企業にソフトウェアエンジニアとして転職する</td></tr>
      </CustomTable> */}
      <h3>■保有資格・試験</h3>
      <ul>
        <li>ITパスポート試験</li>
        <li>Oracle Certified Java Programmer, Silver SE11（通称：Java Silver）</li>
        <li>Bronze DBA Oracle Database Fundamentals（通称：Oracle Master Bronze）</li>
        <li>基本情報技術者試験</li>
        <li>生成AIパスポート試験</li>
        <li>東京大学 松尾・岩澤研究室 大規模言語モデル 2024 修了</li>
      </ul>
      <Img_30 path="./assets/SILVSE11JPN.jpg" alt="認定バッチ"/>
      <Img_30 path="./assets/BRZDBA19CJPN.jpg" alt="認定バッチ" />
      <Img_30 path="./assets/generative-ai-passport-logo.png" alt="認定バッチ" />
    </ArticalPage>
  );
}