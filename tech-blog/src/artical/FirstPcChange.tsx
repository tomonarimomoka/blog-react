import { FC } from "react";
import {ArticalPage , SubTitle , ReadBtn , References_link , CustomTable , SourceCode} from '../Parts';

export const Index: FC = () => {
  return(
    <ArticalPage title="はじめてのPC交換">
      <SubTitle subTitle="はじめに" />
      <p>
        私は大学入学の時に買ったPCを交換しようと考えている。大学入学時はエンジニアになるなんてつゆ知らず、よくわからず買ったので8Gとかなり低スペック。
        それでも、このPCでたくさん勉強して来たし、名残惜しい（面倒）とおもい使い始めて６年！
        エンジニアを目指していたこともありたくさんの言語や開発環境構築を行っていたため、フォルダは知っちゃかめっちゃかで、何故かプロファイルが複数ある状態。
        動作も重く、キーボードの面が剥がれてガムテープで補強して何とか使っていました。いつ壊れるかわからないという恐怖からソースコードのGit管理はきっちりやりました(笑)
      </p>
      <p>
        さて、PCをプライベートで交換するのが初めての私が欲しかった記事を書いていきます。
      </p>
      <SubTitle subTitle="PCを選んで買う" />
      データ移行の準備ができてからPCを買おうとするとズルズルと作業してなかなか終わりません。
      私のお勧めは先にPCを買ってしまうことです。
      初めてPCを買うときとは違って、自分の中でもっと○○だったらいいのに、がありますよね。
      参考までに私のPCを買うときの条件と買ったものを紹介します。
      PCって本当にたくさんの製品があるので、好きなブランドで探すのもありだと思います。
      私はASUSが好きなので、そこから選びました。
      ▼条件
      <ul>
        <li>16G以上</li>
        <li>OLED</li>
        <li>1Kg以下</li>
        <li>好きなブランド（ASUS）</li>
        <li>タイプCで充電ができる</li>
        <li>HDMIが付いている</li>
        <li>USBがさせる</li>
      </ul>
      <CustomTable>
      <tr><th>名称</th><td>ASUS Zenbook S 13 OLED UX5304</td></tr>
      <tr><th>商品番号</th><td>90NB0Z93-M00K20</td></tr>
      <tr><th>バリエーション</th><td>Core i7-1355U／16GB／512GB／WPS オフィス 付き</td></tr>
      <tr><th>価格</th><td>139,800（型落ちのため９万円の割引！！）</td></tr>
      </CustomTable>

      <SubTitle subTitle="プロファイルを整理せよ" />
      私はなぜかPCのプロファイルが6つもありました。全く記憶にないのでひとつづつ見ていくと”81703”がメインで使っていそうでした。
      <ul>
        <li>81703</li>
        <li>Default</li>
        <li>defaultuser100000</li>
        <li>defaultuser100000.DESKTOP-78N6BU4</li>
        <li>defaultuser100000.DESKTOP-78N6BU4.000</li>
        <li>自分の名前</li>
      </ul>
      プロファイルの削除は大変注意が必要ですが、以下の3つは一時的に作られたプロファイルでありそうなことが名前から予測できます。
      <li>defaultuser100000</li>
      <li>defaultuser100000.DESKTOP-78N6BU4</li>
      <li>defaultuser100000.DESKTOP-78N6BU4.000</li>
      特に使ってなさそうなことを確認して、削除しました。
      <SubTitle subTitle="データを整理せよ" />
      色々な場所にデータが散らばっていると全量が把握しずらいです。
      ソースコードはこのプロファイルのこのフォルダ、その他の写真などはGoogle Driveのこのフォルダ、と決めて移動します。
      このときに、明らかに不要なものは棄てれるとあとが楽です。
      <SubTitle subTitle="データはクラウドにあげよ" />
      まず、データはクラウドに上げましょう。私はGoogle Driveにデータを上げました。
      ここで、注意するのがソースコードはGoogle Driveには上げずに、Gitに上げることです。
      なぜならば、ライブラリのインストールなどはGoogle Driveだと重くてできないことがあるためです。
      Google Driveにあげるのはあくまでも写真や動画、履歴書などです。


      <SubTitle subTitle="ソースコードをGitにあげよ" />

      Gitに上げたいものはGitに上げましょう。捨ててもよいと判断したソースコードは潔く消しましょう。
      プログラミングを始めたばかりのころ、Gitどころかバージョン管理という概念しか知らなかった。
      その頃のソースコードはもちろんGitに上げていなかったので、コツコツと上げていく。
      ファイル名も「kadai1.java」など😂エモい気持ちになりつつ、自分の成長に驚いたりして意外といい時間でした。 
      中には何度も作ろうとしては挫折して、色んな言語やフレームワークで挑戦していたプログラムもあり、これは作り直さなくてはと思いました。
      簡単なREADME.mdも付けることにしました。
      <SourceCode>
## これは何？
研究でグラフを作るためのソースコード
## いつごろにつくられたもの？
2022年8月27日
これをつくった3日後にグアムへ飛び立った✈
## 感想
研究室ではもろもろプログラミングで研究を自動化することに力を入れてよりITに興味が強まったなぁ
      </SourceCode>

✅project_0812
✅react-app-20240804
✅repos ⇒ これはVScodeじゃなくてVisualStudioで書いたソースコードだ
  ✅数値計算入門１2022第二回 ⇒ C++_Lessonでコミット
  ✅marubatuGame
  ✅meddisinForADHD ⇒ 判断つかない ⇒ 空のため削除
  ✅medicineForADHDByIOS ⇒ 空だから削除
  ✅medicineForADHDbyMAUI
  ✅medicineForADHDByXamarin ⇒ 格闘した後は見えるが、残すほどの成果なし
  ✅no2 ⇒ c++授業でやったやつだ
  ✅oseroGame
  ✅OseroGameVer.2
  ✅paizaArank01 ⇒ paizaに含める形にする
  ✅Project1 ⇒ 空だから捨てる
  ✅PythonTEST ⇒ 研究で書いたやつだと思う。名前が適当すぎたのとVisualStudioで書いたため余計なものがあったため、theStudyProgramに移動
  ✅solveADHD2ByMAUI
  ✅solveForADHDbyMAUI ⇒ solveADHD2ByMAUIの前身のためすてる
  ✅TESTforCLASS1 ⇒ 期末課題の前身のため削除
  ✅tomonarimomoka ⇒ 空のため捨てる
  ✅yahoo ⇒ CodingTestに統合
  ✅期末課題 ⇒ C++_Lessonでコミット
  ✅数値計算入門１　10回 ⇒ 空のため捨てる
✅StudyPulse
✅ai_hackathon
✅AtCoder
✅CodingTest
✅ex-gen-app
✅express-app ⇒ ほぼ空のため棄てる
✅java ⇒ Javaはほかでやってるから不要なはず
✅java-F
✅make_daily_report ⇒ make_daily_report2に統合
✅make_daily_report2
✅makeDailyReport ⇒ 空だから削除
✅make-data-set
✅make-lp-public
✅mark-down-tool-app
✅mark-down-tool-app-forReact
✅mini_board
✅node-app
✅paiza

      <References_link url="" articleTitle=""/>
      <ReadBtn url="" msg=""/>
    </ArticalPage>
  );
}