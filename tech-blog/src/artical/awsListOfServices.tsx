import { FC } from "react";
import {ArticalPage , SubTitle , ReadBtn ,References_link , References_book , CustomTable} from '../Parts';
import '../style.css'

export const AwsListOfServices: FC = () => {
  return(
    <ArticalPage title="AWS主要サービス一覧">
    <SubTitle subTitle="筆者のスペック" />
    <ul>      
      <li>プログラミングはほぼ独学</li>
      <li>学生時代はプログラマー</li>
      <li>今はソフトフェアエンジニアとして自社製品の製品開発を担当</li>
      <li>使える言語はC# , Java , Python , Shell Script , TypeScript</li>
    </ul>
    <SubTitle subTitle="はじめに" />
    <p>
      会社からのお達しでチームが変わり、突然AWSを触ることに...😇
      移動先のPMからの指示にAWSのサービス名が出てくるが、「S3ってなに？」「Amplify？？」「CloudFrontってなんやねん！」「こちとらEC2しか聞いたないんだが？」となり、無事死亡😇😇😇
    </p>
    <p>
      そこで、仕事で何とか指示を理解できるレベルの知識をまとめました！
      AWS関連の用語でなくても、解説が必要かな？と思った用語は簡単な解説を「用語集」にまとめていますので、併せてご参照ください。
    </p>

    <SubTitle subTitle="AWS主要サービス一覧" />
    <p>AWSでは200を超えるサービスがあります。以下に主要なサービスを抜粋して一覧化します。</p>
    <CustomTable>
      <tr><th>サービス名</th><th>サービス内容</th><th>ちょい解説</th></tr>
      <tr><td>IAM</td><td>AWS上のリソースにアクセスする為の権限を管理するためのサービス</td><td></td></tr>
      <tr><td>EC2</td><td>クラウド上にコンピューターを借りられるサービス。</td><td>借りるコンピューターのことを「インスタンス」と呼ぶ</td></tr>
      <tr><td>AMI</td><td>OSやミドルウェアのテンプレートを作成できるサービス</td><td>AMIの設定をもとにインスタンスを作成することができる</td></tr>
      <tr><td>ROute53</td><td>多様なルーティングができるサービス</td><td></td></tr>
      <tr><td>AWS WAF</td><td>アプリケーションに特化したファイヤーウォール</td><td></td></tr>
      <tr><td>AWS Shield</td><td>DDoS攻撃に対応するためのサービス</td><td></td></tr>
      <tr><td>Amazom API Gateway</td><td>REST、WebSocketのAPIを作ったり、公開したり、管理できるサービス。</td><td>HTTP通信を通じてLambda関数を呼び出せる。</td></tr>
      <tr><td>Amazom Lambda</td><td>特定のタイミングで実行できる関数を作れるサービス。</td><td>サーバーは不要だが、小さなデータサイズの関数のみしか作れない。</td></tr>
      <tr><td>Amazom CloudFront</td><td>低レンテンシーでコンテンツを配信できるサービス。</td><td>キャッシュを利用することで低レンテンシーを実現している。</td></tr>
      <tr><td>Amazom Dynamo DB</td><td>NoSQLのDBが使えるサービス</td><td>データはJSON形式で保持される</td></tr>
      <tr><td>Amazom S3</td><td>データを保存できるストレージサービス。</td><td>ストレージ容量は無制限</td></tr>
      <tr><td>Amazom CloudWach</td><td>EC2インスタンス、RDSインスタンス、DynamoDBテーブルなどの現状をモニタリングサービス</td><td>logの収集だけでなく、アラームを設定することもできる（CPUが連続して高い使用率の時にアラームを鳴らすなど）</td></tr>
      <tr><td>AWS Amplify</td><td>Webアプリケーション、モバイルアプリケーションを構築、デプロイできるフレームワーク</td><td></td></tr>
      <tr><td>Amazon Cognito</td><td>認証機能を提供するサービス</td><td>Oauth 2.0、OpenID Connectにも対応している</td></tr>
      <tr><td>AWS SDK</td><td>開発者が開発の際にスムーズに開発できるようにまとまったツールで、例えばAPIライブラリなどを含む</td><td>Software Development Kit の略</td></tr>
      <tr><td>Amazon Kinesis</td><td>大量のデータの転送処理や操作を高速に行うためのサービス</td><td></td></tr>
      <tr><td>Elastic IP</td><td>AWSで使うパブリックIPアドレス</td><td>AWSから割り当てられるIPアドレスはサーバーを起動するたびに変更されるが、ElasticIPは固定できる</td></tr>
      <tr><td>Amazon Connect</td><td>ソフトフォン（PC上で動く電話）を提供するサービス</td><td></td></tr>
    </CustomTable>
    <h4>参考</h4>
    <References_book author="山下 光洋 and 海老原 寛之" bookTitle="AWS認定資格試験テキスト　AWS認定 クラウドプラクティショナー" lastUpdate="2021"/>
    <References_book author="大澤 文孝" bookTitle="AWS Lambda実践ガイド 第2版" lastUpdate="2023"/>
    <References_link author="Shota Yamazaki" url="https://liginc.co.jp/647119" articleTitle="AWS Amplifyとは？初心者向けにメリットや始め方を紹介" lastUpdate="2024" />
    <References_link url="https://docs.aws.amazon.com/ja_jp/glossary/latest/reference/glos-chap.html" articleTitle="AWS 用語集" author="Amazon" />
    <References_link url="https://dev.classmethod.jp/articles/dynamodb-json-data-type-descriptors/" articleTitle="Amazon DynamoDB独自のJSONデータ型「データ型記述子」についてまとめてみた" lastUpdate="2024"/>
    <References_link url="https://aws.amazon.com/jp/cognito/" articleTitle="Amazon Cognito" author="AWS" lastUpdate="2024"/>
    <References_link lastUpdate="2019" url="https://qiita.com/UpAllNight/items/ec522da70a6fe86a1d16" articleTitle="【AWS】これだけ見れば理解できるCognito〜認証機能つきサーバレスアーキテクチャの作成〜" />
    <References_link lastUpdate="2021" url="https://www.skyarch.net/column/aws-kinesis/" articleTitle="Amazon Kinesisとは？ストリーミングデータをスケーラブルに処理する" />
    <References_link lastUpdate="2024" author="AWS"url="https://aws.amazon.com/jp/what-is/sdk/" articleTitle="SDK とは?" />
    
    <SubTitle subTitle="用語集" />
    <h3>レンテンシー</h3>
    <p>特に、ネットワーク通信では、リクエストを出してから応答し始めるまでの時間のこと。
      この時間が短いことを低レイテンシー、長いことを高レイテンシーと呼ぶ。
      低レンテンシーだとサクサク動くという意味で、ポジティブな表現。
    </p>
    <h3>RDB</h3>
    <ul>      
      <li>Relational Databaseの略</li>
      <li>SQLを使ってデータを扱う</li>
      <li>データは表形式で保持する</li>
    </ul>
    <h3>NoSQL</h3>
    <ul>      
      <li>Not Only SQLの略</li>
      <li>SQLは使えない</li>
      <li>データはさまざまな形式で保持する</li>
    </ul>
    <h3>Oauth</h3>
    <p>
      クライアントからサーバーにデータを取りに行くとき、クライアントが正しいか認証するための仕組み。
      詳しい解説はこちらの記事をご参照ください
      <ReadBtn url="security" msg="読む"/>
    </p>
    <h3>OpenID Connect</h3>
    <p>
      Oauth 2.0の拡張機能。
      詳しい解説はこちらの記事をご参照ください
      <ReadBtn url="security" msg="読む"/>
    </p>

    <h4>参考</h4>
    <References_link author="Amazom" url="https://aws.amazon.com/jp/what-is/latency/" articleTitle="ネットワークレイテンシーとは何ですか?" />
    <References_link author="佐々木　真" lastUpdate="2024" url="https://wa3.i-3-i.info/word111153.html" articleTitle="レイテンシ（英：latency）とは" />
    <References_link author="NTT東日本　アベ" lastUpdate="2022" url="https://business.ntt-east.co.jp/content/cloudsolution/column-338.html" articleTitle="RDB（リレーショナルデータベース）とは｜NoSQLとの違いやメリットを紹介" />

  <SubTitle subTitle="おわりに" />
    <p>
      ここまで読んでくださった皆様、ありがとうございます。
      後から見返せるように、是非ブックマークしてくださいね💗
    </p>     
    <p>
      AWS関連の記事は他にもあるので、ぜひご覧ください。
      <ReadBtn url="awsForBeginner" msg="初学者のためのAWS"/>
    </p>
  
    </ArticalPage>
  );
}