import { FC } from "react";
import {ArticalPage , SubTitle , ReadBtn , CustomTable , References_link , References_book} from '../Parts';
import '../style.css'

export const AwsForBeginner: FC = () => {
  return(
    <ArticalPage title="初学者のためのAWS基本用語">
    <SubTitle subTitle="本記事について" />
    <p>
      本記事ではAWS初心者に向けた用語の解説を行います。
      AWSに関する知識があまりない方がサクッと調べられるように箇条書きで説明します。<br/>
      参考リンクも記載していますので、もっと詳しく入れたい方は参照してください。
    </p>

    <SubTitle subTitle="AWSとは" />
    <ul>
      <li>Amazon Web Serviceの略</li>
      <li>Amazonが提供する200以上のクラウドサービスの総称</li>
    </ul>
    <h4>参考</h4>
    <References_link author="NTT東日本" lastUpdate="2024" url="https://business.ntt-east.co.jp/content/cloudsolution/column-259.html" articleTitle="AWSとは？初心者にもわかりやすく特徴・概要を纏めました" />
    <References_link author="TECH MANIA" lastUpdate="2023" url="https://techmania.jp/blog/aws0001/" articleTitle="AWSとは【入門】基礎からわかりやすく解説" />
    <References_link author="佐々木　真" lastUpdate="2022" url="https://wa3.i-3-i.info/word12933.html" articleTitle="AWS（読：エーダブリューエス）とは" />

    <SubTitle subTitle="EC2関連の用語" />
    <h3>EC2</h3>
    <ul>
      <li>Amazon Elastic Compute Cloud の略</li>
      <li>Amazonの仮想サーバー（クラウド上にサーバーを構築できる）サービス</li>
      <li>サーバーの性能も台数も柔軟に決められる</li>
      ※Elasticは日本語で "柔軟性のある" という意味
    </ul>

    <h3>リージョン</h3>
    <ul>      
      <li>AWSのサーバーが置いてある国や地域のこと</li>
      <li>物理的な場所</li>
    </ul>

    <h3>インスタンス</h3>
    <ul>
      <li>EC2上の仮想サーバーのこと</li>
      <li>１インスタンス＝仮想サーバー1台</li>
      <li>インスタンスは時間によって変動可能</li>
    </ul>
    <h3>AMI</h3>
    <ul>      
      <li>Amazon Machine Imageの略</li>
      <li>OSやミドルウェアのテンプレート</li>
      <li>AMIの設定をもとにインスタンスを起動する</li>
    </ul>
    
    <h3>セキュリティグループ</h3>
    <ul>      
      <li>EC2インスタンスの仮想ファイアウォール</li>
      <li>インスタンスそのものを保護する</li>
      <li>セキュリティーグループルールの設定で、トラフィックを制限出来る</li>
      ※トラフィックとはネットワーク上の通信や通信量のこと
    </ul>

    <h3>ElasticIP</h3>
    <ul>
      <li>EIPと略される</li>
      <li>AWSで使うパブリックIPアドレス</li>
      <li>AWSから割り当てられるIPアドレスはサーバーを起動するたびに変更されるが、ElasticIPは固定できる</li>
    </ul>
    
    <h4>参考</h4>
    <References_book author="技術評論社" bookTitle="AWSの知識地図" lastUpdate="2022"/>
    <References_book author="トレノケート株式会社" bookTitle="AWS認定クラウドプラクティショナー" lastUpdate="2022" />
    <References_link lastUpdate="2021" url="https://zenn.dev/tomoshimizu/articles/eedb6856df9c90" articleTitle="【AWS】EC2とは？概要から使い方までざっくり解説（実践あり）"/>
    <References_link author="weblio" url="https://ejje.weblio.jp/content/elastic" articleTitle="elasticとは 意味・読み方・使い方"/>
    <References_link author="佐々木　真" lastUpdate="2021" url="https://wa3.i-3-i.info/word1972.html" articleTitle="トラフィック（英：traffic）とは"/>
    <References_link author="Amazon" url="https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/concepts.html" articleTitle="Amazon EC2 とは"/>
    <References_link author="Amazon" url="https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html" articleTitle="Elastic IP アドレス"/>
    <References_link lastUpdate="2019" url="https://cloud.oreda.net/aws/ec2/note/eip.html" articleTitle="Elastic IP Address(EIP) を徹底理解"/>

    <SubTitle subTitle="ROute53関連の用語" />
    <h3>ROute53</h3>
    <ul>
      <li>AmazonのDNSサービス</li>
      <li>「ルートフィフティースリー」と読む </li>
      <li>多様なルーティングができる</li>
    </ul>
    <CustomTable cap="▼Route 53でできるルーティング（一部抜粋）">
      <tr><th>名称</th><th>意味</th></tr>
      <tr><th>シンプルルーティング</th>
        <td>
          <p>1つのドメインに対して1つのIPアドレス</p>
        </td>
      </tr>
      <tr><th>レイテンシールーティング</th>
        <td>
          <ul>      
            <li>1つのドメインに対して複数のIPアドレス</li>
            <li>地域によってIPアドレスを使い分ける</li>
            <li>遅延度を下げられる </li>
          </ul>
        </td>
      </tr>
      <tr><th>加重ルーティング</th>
        <td>
          <ul>      
            <li>1つのドメインに対して複数のIPアドレス</li>
            <li>事前に決めた割合に応じてIPアドレスを選ぶ</li>
          </ul>
        </td>
      </tr>
      <tr><th>複数値回答ルーティング</th>
        <td>
          <ul>      
            <li>1つのドメインに対して複数のIPアドレス</li>
            <li>ランダムにIPアドレスを選ぶ</li>
          </ul>
        </td>
      </tr>
    </CustomTable>    
    <h3>DNS</h3>
    <ul>      
      <li>Domain Name System の略</li>
      <li>IPアドレスとドメイン名を紐づけるシステム</li>
      ※これは一般的なIT用語
    </ul>
    <h4>参考</h4>    
    <References_link lastUpdate="2024" url="https://en-junior.com/route53/" articleTitle="【図解AWS】Route53とは？初心者にもわかりやすく解説！"/>
    <References_link lastUpdate="2021" url="https://zenn.dev/seyama/articles/02118b0914183e" articleTitle="Amazon Route 53のルーティングがすごすぎる件"/>
    <References_link author="Amazon" url="https://docs.aws.amazon.com/ja_jp/Route53/latest/DeveloperGuide/routing-policy.html" articleTitle="ルーティングポリシーの選択"/>
    <References_book author="技術評論社" bookTitle="AWSの知識地図" lastUpdate="2022"/>
    <References_book author="トレノケート株式会社" bookTitle="AWS認定クラウドプラクティショナー" lastUpdate="2022"/>

  <SubTitle subTitle="おわりに" />
    <p>
      読んでくださりありがとうございました。
    </p>
    <p>
      AWSの用語が多くて難しいと感じた方もいらっしゃるかもしれません。
      本記事ではAWSに限らずエンジニアなら知っている言葉もたくさん出てきています。(DNS、ファイアーウォール、IPアドレスなど)
      本記事が難しく感じた方は、はじめにIT業界の用語を覚えることから始めると良いかもしれません。
    </p>
    <p>
      AWS関連の記事は他にもあるので、ぜひご覧ください。
      <ReadBtn url="awsListOfServices" msg="AWSサービス一覧"/>
    </p>
    </ArticalPage>
  );
}