import { FC } from "react";
import {ArticalPage , SubTitle , ReadBtn, SourceCode , ArticleCard, FlexBox} from '../Parts';

export const HowToMigrateBlog: FC = () => {
  const readBtnSource = `
export const ReadBtn: FC<{ url: string , msg?:string }> = ({ url , msg="読む" }) => {
  return(
    <a href={url} className="btnArticleLinkInText">
      {msg}↗
    </a>
  )
}`

  const articalBoxSource = `
  export const ArticleCard: FC<{ title: string , fileName:string , children:string }> = ({ title , fileName , children }) => {
    let url = "/" + fileName
    return (
      <>      
        <a href={url} className="articalBox">
          <h3>
            {title}
          </h3>
          <p>
            {children}
          </p>        
        </a>
      </>
    );
  }
`
  return(
      <ArticalPage title="HTMLからReactに移植する方法">
      <SubTitle subTitle="なぜReactにしたかったか" />
      <p>まず初めに、なぜHTML・CSSの静的なサイトをTypeScript×Reactに作り替えたかについてお話します。</p>
      <p>主な理由は以下です。</p>
      <ul>
        <li>HTMLを書くのが大変で記事を書かなくなる</li>
        <li>記事の数が増えてきて、修正が大変</li>
        <li>今後作ってみたい機能がある</li>
        <li>HTML・CSSはもう十分学んだ</li>
        <li>TypeScript×Reactで一人で作りきれる自信があった</li>
      </ul>

      <p>
        当たり前なのですが、HTMLはJavaやPythonなどのいわゆる "プログラミング言語" とは異なり、関数化ができません。
        そのためいちいち以前に書いた処理を探して、コピペして貼り付けて作っていました。もちろん自分なりのフォーマットHTMLは作っていましたが、かなり面倒でした。
        結果的に記事の執筆自体のハードルが上がっていました。
      </p>
      <p>
        私はバックエンドエンジニアの経験が主でフロントエンドの経験はあまりありません。そのため、勉強のためにWebサイトを作ったのですが、そろそろ学びきったように感じていました。
        また仕事や個人開発でTypeScript×Reactを使ううちに、Webサイトくらいだったら一人でサクッと作れる自信も付いたのでチャレンジしてみることにしました。
      </p>

      <SubTitle subTitle="移植の大まかな流れ" />
      <p>自動化の主な流れは以下の通りです。</p>
      <ol>
        <li>部品(Reactのコンポーネント)を作る。例えば、ボタンやヘッダーやコードブロックなど</li>
        <li>適切なコンポーネント名でTSXファイルを作る</li>
        <li>プログラムで作った部品を全ての記事に適応させる</li>
        <li>手作業での手直し</li>
        <li>作成したコンポーネントを使ってあたらしい記事を書いてみて、追加修正すべき点を見つけて修正</li>
      </ol>
      <p>
        初めから全ての記事に対応しようとするのではなく、1つの記事に対応してほかの記事は自動で変換できるようにしました。
      </p>

      <SubTitle subTitle="コンポーネント作成の工夫" />
      <p>
        部品はHTMLで記事を執筆する際に大変だと思っていたことを解決できるように作っていきました。
        作成したコンポーネントをいくつか紹介します。
      </p>      
      <h3>■リンクボタン</h3>
      <p>本サイトでたびたび登場するリンクボタン<ReadBtn url="/" msg="Home"/>は下記のように定義しました。</p>
      <SourceCode language="typescript">{readBtnSource}</SourceCode>
      <h3>■記事紹介ボックス</h3>
      <p>記事紹介コンポーネントは、下記のように定義しました。</p>
      <FlexBox>
        <ArticleCard title="【発表】LT会参加レポート"  fileName="firstLTparty" > 
          紹介文～～～～～～～～～～～～～～～～
        </ArticleCard> 
      </FlexBox>
       <SourceCode language="typescript">{articalBoxSource}</SourceCode>
      
      <SubTitle subTitle="移植を自動化しよう" />
      <p>
        もともとの静的なサイトの時点で記事の数は20でした。すべて手作業でやるのは嫌だったので、プログラムである程度自動化しました。
        処理は主に以下の流れです。
      </p>
      <ol>
        <li>HTMLファイルの名前からコンポーネント名を自動でつける※初めの文字は大文字にする必要あり</li>
        <li>HTMLの中身を取得</li>
        <li>HTMLからReactに変換（置換など）</li>
        <li>適切な名前のTSXファイルに保存</li>
      </ol>
      <p>
        私は自動変換プログラムをPythonで作成しました。Pythonは手軽に使えるため、サクッと何かを自動化したいときによく使います。
        詳しいプログラムが気になる方はGitHubをご覧ください。
        <ReadBtn url="https://github.com/tomonarimomoka/migrator_html2react" msg="GitHub"/></p>
      <p>
        どうしても自動で変換できない部分もあると思いますが、手で直すのは最後まで待つべきです。
        なぜならば、手で修正してしまうと、後から自動変換を再実行した際に、その修正内容が上書きされて失われる可能性があるためです。
      </p>

      <SubTitle subTitle="Reactにした感想" />
      <p>
        まず、非常に執筆が楽になりました。（本記事はTypeScript×Reactに直して初めて書く記事です。）
        テックブログでは記事の中で決まったHTMLを使うことが多いので、Reactと相性が良く、コンポーネントの数も少ないです。
        そのため、執筆する際にはいくつかのコンポーネントを使うだけでよいのですが、コンポーネント化するとエディタの機能で入力も楽なのもうれしいです。
        行数で言うと1記事当たり大体50行くらい削減できています。また、マークダウンを使うこともできるので、今後はマークダウンで書いてしまう記事もあるかもしれません。       
      </p>

      <SubTitle subTitle="終わりに" />
      <p>
        最後まで読んでくださりありがとうございます。システムリプレイスを経てより良くなった本サイト「かわいいてっくももか」をよろしくお願いいたします。
      </p>
    </ArticalPage>
  );
}