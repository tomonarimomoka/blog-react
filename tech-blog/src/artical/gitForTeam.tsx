import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn ,References , SourceCode , LastUpdate} from '../Parts';
import '../style.css'

export const GitForTeam: FC = () => {
  var ref:string[][] = [[] ,[] ,[] ] 
  return(
    <>

<HeaderNav />  
  <main className="box">    
    <h1 id="articleTitle">仕事で使えるGitコマンド集</h1>
    <LastUpdate/>
    <SubTitle subTitle="本記事の対象者" />
    <ul>      
      <li>仕事でGitを使う人</li>
      <li>gitの基礎的な仕組みは理解している人</li>
    </ul>
    <p>
      gitを始めて使う方はぜひ初学者向けのGit記事をご覧ください。
      <ReadBtn url="gitForBeginner" msg="読む"/>
    </p>
    <SubTitle subTitle="クローン" />
    以下コマンドを実行すると、特定のブランチからソースコードを取得することができます
    <SourceCode code='git clone ＜リポジトリのURL＞ -b ＜欲しいブランチの名前＞'/>

    <SubTitle subTitle="チェックアウト" />
      <SourceCode code='git checkout ＜新しいブランチ名＞'/>
    
    <SubTitle subTitle="新しくブランチを作る" />
    <p>
      以下のコマンドを実行すると、今いるブランチから新しいブランチが切られます。
    </p>
    <SourceCode code='git branch ＜新しいブランチ名＞'/>

    <SubTitle subTitle="リモート登録" />
      <p>
        ブランチを切ったら、リモート登録をしないとpushできないことがあります。そんな時は以下のコマンドを実行しましょう！
      </p>
      <SourceCode code='git push -u origin ＜ブランチ名＞'/>    　

    <SubTitle subTitle="フェッチ" />
      <p>
        fetchとは、リモートリポジトリに更新があった際にローカルブランチにその更新を反映させるための操作です。
      </p>
      <SourceCode code='git fetch'/>

    <SubTitle subTitle="ブランチ移動" />
      <p>
        ブランチを移動するときはswitchコマンドを使います。ローカルリポジトリがまだないときも自動でローカルリポジトリを作ってくれます。
      </p>
      <SourceCode code='git switch ＜ブランチ名＞'/>

    <SubTitle subTitle="マージ" />
    <p>
      gitのマージとはブランチを統合してすることです。以下コマンド実行後はaddまでされるので、pushだけでOKです。
    </p>
      <SourceCode code='git merge ＜ブランチ名＞'/>　    
​
    <h4>参考</h4>
    株式会社ヌーラボ , <a href="https://backlog.com/ja/git-tutorial/">サル先生のGit入門</a><br/>
    2021 , OpenGroove , <a href="https://tracpath.com/docs/git-switch/">Git コマンドリファレンス（日本語版）</a><br/>
    2018 , <a href="https://webbibouroku.com/Blog/Article/git-clone-branch">git clone で指定ブランチをクローンする方法</a>


    <SubTitle subTitle="おわりに" />
      <p>
        最後まで読んでいただき、ありがとうございました。        
      </p>
      <p>
        筆者はgit switchコマンドが新しくできたのが直感的で嬉しいです。
      </p>
      <p>
        gitを使いこなして、楽しい開発ライフを送りましょー！
      </p>
  </main>
  
    </>
  );
}