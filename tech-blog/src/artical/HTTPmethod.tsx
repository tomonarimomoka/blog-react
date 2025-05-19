import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn , References_link , References_book, CustomTable , LastUpdate} from '../Parts';
import '../style.css'

export const HTTPmethod: FC = () => {
  
  const codeEx = `http://examole.jp/search
content_type = "text/html; charset=UTF-8"
{
  user_id:1234;
  content:これはTESTです。
}`
  return(
    <>

<HeaderNav />
  <main className="box">    
    <h1 id="articleTitle">HTTPメソッドとは？</h1>
    <LastUpdate/>
    
    <SubTitle subTitle="８つのメソッド" />
    <p>HTTPには8つしかメソッドがありません。今回はよく使うGETとPOSTについて詳しく説明します。</p>
    <CustomTable>
      <tr><th> メソッド名</th><th> 何ができる</th></tr>
      <tr><td> GET</td><td>リソースの取得</td></tr>
      <tr><td>POST</td><td>リソースの取得、追加、子リソースの作成</td></tr>
      <tr><td>PUT</td><td>リソースの更新、作成</td></tr>
      <tr><td>DELETE</td><td>削除</td></tr>
      <tr><td>HEAD</td><td>ヘッダの取得</td></tr>
      <tr><td>OPTIONS</td><td>サポートしているメソッドの取得</td></tr>
      <tr><td>TRACE</td><td>自分宛てにリクエストメッセージを返す</td></tr>
      <tr><td>CONNECT</td><td>プロシキ動作のトンネル接続への変更</td></tr>
    </CustomTable>

    <SubTitle subTitle="GET" />
    <p>
      GETではリソースの取得ができます。リソースの取得の際は以下のようにパラメータを含めることでどんなデータが欲しいのか、サーバー側に伝えることができます。
    </p>
    <pre>
      <code className="codeBlock">
http://examole.jp/search?q=＜リクエストパラメータ＞
      </code>
    </pre>
    <h3>GETは危険？</h3>
    <p>このパラメータがあまりに長い場合やエンドユーザーに見せたくない場合にはPOSTを使いましょう。
      URLでパラメータが見えてしまうのでブラウザのURLバーからエンドユーザーに見えてしまいます。</p>

      <SubTitle subTitle="POST" />
    <h3>色んなことができるPOST</h3>
    <p>
      POSTはいろいろ出来るのです！8つのメソッドを初めに紹介しましたが、実際によく使うのはGETとPOSTです。
      PUT、DELETE、場合によってはGETはPOSTメソッドで代用します。
      例えば以下のようなことができます。
    </p>
    <ul>            
      <li>子リソースの作成</li>
      <li>既存リソースへのデータ追加</li>     
      <li>リソースの作成（PUTの代用）</li>      
      <li>リソースの取得（GETの代用）</li> 
      <li>リソースの更新（PUTの代用）</li>
      <li>リソースの削除（DELETEの代用）</li>
    </ul>
    
    <h3>GETの代わりにPOSTを使うとき</h3>
    <p>
      データを取得したい場合でリクエストパラメータが長すぎる又はエンドユーザーにに見せたくない場合はPOSTを使いましょうと記載しました。
    </p>
    <p>
      何故でしょうか？
    </p>
    <p>
      それはPOSTの場合リクエストボディにパラメータを含めることができるからです。以下のように記載します。
    </p>
    {/* <!-- code blockだからここから触らないこと --> */}
    <pre>
      <code className="codeBlock">{codeEx}</code>
    </pre>
    {/* <!-- code blockここまで --> */}
    <p>
      言い換えると、URLにパラメータが含まれないからエンドユーザーにばれないということですね。
    </p>
    <SubTitle subTitle="" />
    <h4>参考</h4>
      <References_book author="技術評論社．山本陽平" chapter="第6章　HTTPの基本"　bookTitle="Webを支える技術" lastUpdate="2010"/>
      <References_link lastUpdate="2020" url="https://qiita.com/kanataxa/items/522efb74421255f0e0a1" articleTitle="GETとPOSTの違いについて" />
      <References_link author="佐々木　真" lastUpdate="2022" url="https://wa3.i-3-i.info/word1496.html" articleTitle="POSTメソッド【HTTPリクエストメソッド】（読：ポストメソッド　英：POST method）とは" />
      <References_link lastUpdate="2020" url="https://qiita.com/kanataxa/items/522efb74421255f0e0a1" articleTitle="GETとPOSTの違いについて" />
      <SubTitle subTitle="おわりに" />
      <p>
        最後まで読んでいただき、ありがとうございました。<br/>
        普段とりあえずPOSTを使っている人も、なぜPOSTを使うか理解できましたか？お役に立てていれば幸いです。
      </p>
    </main>
    
    </>
  );
}