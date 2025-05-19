import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn , References_link , References_book , SourceCode , LastUpdate} from '../Parts';
import '../style.css'

export const GitForTeam: FC = () => {
  
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
    <SourceCode>git clone ＜リポジトリのURL＞ -b ＜欲しいブランチの名前＞</SourceCode>

    <SubTitle subTitle="チェックアウト" />
      <SourceCode>git checkout ＜新しいブランチ名＞</SourceCode>
    
    <SubTitle subTitle="新しくブランチを作る" />
    <p>
      以下のコマンドを実行すると、今いるブランチから新しいブランチが切られます。
    </p>
    <SourceCode>git branch ＜新しいブランチ名＞</SourceCode>

    <SubTitle subTitle="リモート登録" />
      <p>
        ブランチを切ったら、リモート登録をしないとpushできないことがあります。そんな時は以下のコマンドを実行しましょう！
      </p>
      <SourceCode>git push -u origin ＜ブランチ名＞</SourceCode>   　

    <SubTitle subTitle="フェッチ" />
      <p>
        fetchとは、リモートリポジトリに更新があった際にローカルブランチにその更新を反映させるための操作です。
      </p>
      <SourceCode>git fetch</SourceCode>

    <SubTitle subTitle="ブランチ移動" />
      <p>
        ブランチを移動するときはswitchコマンドを使います。ローカルリポジトリがまだないときも自動でローカルリポジトリを作ってくれます。
      </p>
      <SourceCode>git switch ＜ブランチ名＞</SourceCode>

    <SubTitle subTitle="マージ" />
    <p>
      gitのマージとはブランチを統合してすることです。以下コマンド実行後はaddまでされるので、pushだけでOKです。
    </p>
      <SourceCode>git merge ＜ブランチ名＞'</SourceCode>    
​
    <h4>参考</h4>
    <References_link author="株式会社ヌーラボ" url="https://backlog.com/ja/git-tutorial/" articleTitle="サル先生のGit入門" /><br/>
    <References_link author="OpenGroove" lastUpdate="2021" url="https://tracpath.com/docs/git-switch/" articleTitle="Git コマンドリファレンス（日本語版）" /><br/>
    <References_link lastUpdate="2018" url="https://webbibouroku.com/Blog/Article/git-clone-branch" articleTitle="git clone で指定ブランチをクローンする方法" />

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