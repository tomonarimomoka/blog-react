import { FC } from "react";
import {ArticalPage , SubTitle , ReadBtn , References_link , SourceCode} from '../Parts';

export const GitForTeam: FC = () => {
  return(
    <ArticalPage title="Gitコマンド集">
    <SubTitle subTitle="本記事の対象者" />
    <ul>      
      <li>仕事でGitを使う人</li>
      <li>gitの基礎的な仕組みは理解している人</li>
    </ul>
    <p>
      gitを始めて使う方はぜひ初学者向けのGit記事をご覧ください。
      <ReadBtn url="gitForBeginner" />
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

    <SubTitle subTitle="直前のコミットメッセージを修正する" />
      <SourceCode>git commit --amend -m '＜新しいコミットメッセージ＞'</SourceCode>

    <SubTitle subTitle="リモートブランチの変更を取り込む" />
      <h3>■pull</h3>
      <p>
        git pullコマンドを実行すると直ぐにローカルブランチにリモートブランチの変更が反映されます。
      </p>
      <SourceCode>git pull</SourceCode>

      <h3>■fetch</h3>
      <p>
        fetchとは、リモートブランチの変更を取得しますが、ローカルブランチに反映はしません。
      </p>
      <SourceCode>git fetch</SourceCode>

    <SubTitle subTitle="ブランチ移動" />
      <p>
        ブランチを移動するときはswitchコマンドを使います。ローカルブランチがまだないときも自動でローカルリポジトリを作ってくれます。
      </p>
      <SourceCode>git switch ＜ブランチ名＞</SourceCode>

    <SubTitle subTitle="マージ" />
    <p>
      マージというコマンド名のせいで分かりずらいのですが、git mergeでは、<b>今いるブランチにほかのブランチの修正を取り込み</b>ます。
    </p>
    <p>
      また、<b>mergeコマンドはcommitが内包されるので、git commit は不要</b>です。
    </p>
      <SourceCode>git merge ＜ブランチ名＞</SourceCode>    

    <SubTitle subTitle="変更を一時的に捨てる" />
    <p>
      git switchコマンドなどでブランチを移動するときに、今いるブランチにcommitされていない変更があるとブランチを移動できません。
      そんな時に変更を一時的に捨てることができるのがgit stashコマンドです。
    </p>
    <h3>■退避</h3>
    <SourceCode>git stash</SourceCode>  
    <h3>■退避を戻す</h3>
    <SourceCode>git stash pop</SourceCode> 
    
​   <SubTitle subTitle="おわりに" />
      <p>
        最後まで読んでいただき、ありがとうございました。        
      </p>
      <p>
        筆者はgit switchコマンドが新しくできたのが直感的で嬉しいです。
      </p>
      <p>
        gitを使いこなして、楽しい開発ライフを送りましょー！
      </p>
      
    <h4>参考</h4>
    <References_link author="株式会社ヌーラボ" url="https://backlog.com/ja/git-tutorial/" articleTitle="サル先生のGit入門" />
    <References_link author="OpenGroove" lastUpdate="2021" url="https://tracpath.com/docs/git-switch/" articleTitle="Git コマンドリファレンス（日本語版）" />
    <References_link lastUpdate="2018" url="https://webbibouroku.com/Blog/Article/git-clone-branch" articleTitle="git clone で指定ブランチをクローンする方法" />
    <References_link url="https://qiita.com/ymp-a/items/0ed00353cdd5ca9e133c" articleTitle="間違ったgit commit（コミットメッセージ）を修正したい" lastUpdate="2022" />
 
  </ArticalPage>
  );
}