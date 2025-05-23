import { FC } from "react";
import {ArticalPage , SubTitle , Img_60} from '../Parts';

export const Security: FC = () => {
  return(
    <ArticalPage title="ASVS用語集">
    <SubTitle subTitle="本記事について" />
    <p>
      本記事ではセキュリティ標準として知られているASVSの中の認証に関する用語を解説します。<br/>
      参照した記事は
      <a href="https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html">Authentication Cheat Sheet</a>
      です。<br/>
      セキュリティに関する知識があまりない方がサクッと調べられるように箇条書きで説明します。<br/>
      参考リンクも記載していますので、もっと詳しく入れたい方は参照してください。
    </p>
    <SubTitle subTitle="ASVS" />
    <ul>
      <li>Application Security Verification Standardの略</li>
      <li>攻撃を防ぐための方法を示した開発者のためのガイドライン</li>
      <li>OWASPという団体が定めている</li>
    </ul>
    <h4>参考リンク</h4>
    OWASP , 2023 , <a href="https://cheatsheetseries.owasp.org/index.html">OWASP Cheat Sheet Series</a>
    <br/>
    OWASP , 2023 , <a href="https://owasp.org/www-project-cheat-sheets/">OWASP公式ホームページ</a>
    <br/>
    2022 , <a href="https://qiita.com/Nebel-hb/items/cef4c43abcb9e06d2d4a">脱初心者！ ASVSとは</a>
    
    <SubTitle subTitle="MFA/多要素認証" />
    <ul>
      <li>Multi-factor authenticationの略</li>
      <li>MFA = 多要素認証</li>
      <li>多要素認証にシングルサインオンを使うと便利</li>
    </ul>
    <h4>参考リンク</h4>
    MITANI CORPORATION , 2021 , 
    <a href="https://www.mitani-edu.jp/column/049/">シングルサインオン（SSO）の概要とメリットとは</a>
    <br/>
    Okta社 ,2021 , 
    <a href="https://www.okta.com/jp/blog/2021/02/single-sign-on-sso/">SSO（シングルサインオン）のログインとその誤解</a>
    <br/>
    アイディネットワークス株式会社 , 2014 , 
    <a href="https://www.idnetworks.co.jp/wP/2014/04/04/sso-with-2fa/">企業ユースであればシングルサインオンは二要素認証（多要素認証）と併用するべき</a>
    <br/>
    オージス総研 , 
    <a href="https://www.ogis-ri.co.jp/column/themistruct/c106480.html">シングルサインオン（SSO）認証とは？</a>

    <SubTitle subTitle="CAPTCHA" />
    <ul>
      <li>Completely Automated Public Turing test to tell Computers and Humans Apart の略</li>
      <li>CAPTCHA = キャプチャ認証</li>
      <li>ユーザーが機械か人か判断するための仕組み</li>
      
      <li>ブルートフォース攻撃のようなソフトウェアを使った攻撃から守るためのもの</li>
      <li>ゆがんだ文字とか信号機を選ぶみたいなあれのこと</li>
      <li>パスワードを使った認証とCHAPCHAの2つを使う認証は多要素認証にならない<br/>
      　→　なぜならば、CHAPCHA認証は人であることを証明するだけでユーザーが本人であることを確認するためのものではないから</li>
    </ul>
    <h4>参考リンク</h4>
     (株)インセプト , 2019 , <a href="https://e-words.jp/w/CAPTCHA.html">CAPTCHAとは </a>

    <SubTitle subTitle="OAuth" />
    <ul>
      <li>クライアントからサーバーにデータを取りに行くとき、クライアントが正しいか認証するための仕組み</li>
      <li>正しいクライアントであることを示す証明書を「アクセストークン」と呼ぶ</li>
      <li>アクセストークンの発行元を「認可サーバー」と呼ぶ</li>
      <li>アクセストークンの発行時、クライアントと認可サーバーの間のやり取りを標準化した仕様を「OAuth 2.0」と呼ぶ</li>
    </ul>
    <h4>▼OAuth認証の仕組み</h4>
      <Img_60 path="/assets/OAuthの仕組み.png" alt="OAuthの仕組み" />
    <h4>▼OAuth 2.0とは？</h4>
      <Img_60 path="/assets/OAuth20の仕組み.png" alt="OAuthの仕組み" />
    <h4>参考リンク</h4>
    川崎貴彦さんの記事はどれもとても分かりやすいので、おすすめです。<br/>
    川崎 貴彦 , 2020 , <a href="https://qiita.com/TakahikoKawasaki/items/e37caf50776e00e733be">一番分かりやすい OAuth の説明</a>
  

    <SubTitle subTitle="openId" />
    <ul>
      <li>クライアントからサーバーにデータを取りに行くとき、クライアントが正しいか認証するための仕組み</li>
      <li>正しいクライアントであることを示す証明書を「IDトークン」と呼ぶ</li>
      <li>IDトークンの発行元を「Open IDプロバイダー」と呼ぶ</li>
      <li>トークンIDの発行時、クライアントとOpen IDプロバイダーの間のやり取りを標準化した仕様を「OpenID Connect」と呼ぶ</li>
      <li>OpenID Connect は OAuth 2.0 の拡張仕様</li>
    </ul>
    <h4>▼OpenID認証の仕組み</h4>
      <Img_60 path="/assets/OpenID認証の仕組み.png" alt="OAuthの仕組み" />
    <h4>▼OpenID Connectとは？</h4>
      <Img_60 path="/assets/OpenIDの仕組み.png" alt="OAuthの仕組み" />
    <h4>参考リンク</h4>
    川崎貴彦さんの記事はどれもとても分かりやすいので、おすすめです。<br/>
    川崎 貴彦 , 2020 , <a href="https://qiita.com/TakahikoKawasaki/items/498ca08bbfcc341691fe">一番分かりやすい OpenID Connect の説明</a>
    <br/>
    (株)インセプト , 2019 , <a href="https://e-words.jp/w/OpenID.html">OpenIDとは</a>

    <SubTitle subTitle="SAML" />

    <ul>
      <li>Security Assertion Markup Languageの略 ※Assertion(アサーション) : 断言、断定、主張</li>
      <li>SAMLの読み方は「サムル」</li>
      <li>XMLベースのマークアップ言語の一つ</li>
      <li>ユーザの認証情報をを伝達するためのもの</li>
      <li>SSO(シングルサインオン)のための仕組み</li>
      <li>標準化団体のOASISによって策定された</li>
    </ul>

    <h4>参考リンク</h4>
    佐々木　真 , 2022 , <a href="https://wa3.i-3-i.info/word13374.html">SAML（読：サムル）とは</a>
    <br/>
    2018 , <a href="https://qiita.com/pasta_kun/items/4a57bd3b71ac8bf5d736">やさしい言葉で理解するSAML認証のまとめ</a>
    <br/>     
    2023 , <a href="https://milestone-of-se.nesuke.com/product/oss/saml/">分かりやすいSAML認証の仕組みとシーケンス,メリット</a>
    <br/>
    (株)インセプト , 2019 , <a href="https://e-words.jp/w/SAML.html">SAMLとは</a>        

    <SubTitle subTitle="SHA-256" />
    <ul>
      <li>入力されたデータをもとにして作った適当な値を返してくれる関数（ハッシュ関数）のひとつ</li>
    </ul>
    <h4>参考リンク</h4>
    佐々木　真 , 2022 , <a href="https://wa3.i-3-i.info/word15997.html">SHA-256とは</a>

    <SubTitle subTitle="CSRFとXSS" />
    <p>
      CSRFとXSSどちらも悪意のあるURLを踏ませることで始まる攻撃
    </p>
    <h3 >■CSRF</h3>
    <ul style={{margin: '0.2em'}}>
      <li>Cross-Site Request Forgerの略</li>
      <li>URLふむと意図しない動作をさせる</li>
    </ul>

    <h3>■XSS</h3>
    <ul style={{margin: '0.2em'}}>
      <li>Cross Site Scriptingの略</li>
      <li>COOKIEを盗む</li>
    </ul>
    <h4>参考リンク</h4>
    2019 , <a href="https://qiita.com/wanko5296/items/142b5b82485b0196a2da">3分でわかるXSSとCSRFの違い</a>
    <br/>
    2020 , <a href="https://qiita.com/att55/items/a50ca43adde206017525">XSSとCSRFって結局何が違うのか？</a>
    <br/>
    
    <SubTitle subTitle="FIDO" />
    <ul>
      <li>Fast Identity Online の略</li>
      <li>FIDOの読み方は「ファイド」</li>
      <li>秘密鍵で暗号化してサーバー側に送り、公開鍵で検証しサーバーの認証を行う</li>
      <li>秘密鍵はユーザーデバイス内に保存される</li>
      <li>認証情報がネットワーク上に流れない</li>
      <li>認証情報がサーバーに保存されない</li>
      <li>認証のために専用デバイスが必要</li>
    </ul>
    <h4>参考リンク</h4>
    株式会社セキュアオンライン , 2022 , <a href="https://cybersecurity-jp.com/column/67064">FIDO認証とは？パスワードレスで本人認証できる仕組みを解説</a>
    <br/>
    NTTコム オンライン・マーケティング・ソリューション株式会社 , 2022 , <a href="https://www.nttcoms.com/service/ciam/column/20220214/">パスワードが不要？FIDO認証の仕組みやメリット・デメリット</a>

    <SubTitle subTitle="FIDO2 / WebAuthn" />
    <ul>
      <li>FIDO2を実現するための技術をWebAuthnと言う</li>
      <li>WebAuthnの読み方は「ウェブオースン」</li>
      <li>WebAuthnの実態 = Webブラウザ上のアプリケーションが利用するJavaScript API</li>
      <li>このAPIを利用することで、Webアプリケーション上でFIDO認証ができる</li>
    </ul>
    <h4>参考リンク</h4>
    株式会社アクシスルートホールディングス , 2020 , <a href="https://qiita.com/kawasaki_dev/items/c532daee2712b9034c8f">WebAuthnとは？</a>
    <br/>
    工藤 大樹 , 2023 , <a href="https://www.nri-digital.jp/tech/20230124-12533/">次世代の認証技術　WebAuthnを紹介【前編】</a>
    <br/>
    森 智史 , 2023 , <a href="https://blog.trustlogin.com/articles/2019/20190604">【企業担当者必見】「FIDO2」とは何か？仕組みやメリット、FIDOとの違いについて詳しく解説</a>

    <SubTitle subTitle="TOTP" />
    <ul>
      <li>Time-based One-Time Passwordの略</li>
      <li>ワンタイムパスワード（OTP）の生成手法の標準の一つ	</li>
      <li>30秒間有効なワンタイムパスワード</li>
      <li>秘密鍵と現在時刻からハッシュ値を求め、これを6桁程度の数値列に変換してパスワードとする</li>
    </ul>
    <h4>参考リンク</h4>
    (株)インセプト , 2023 , <a href="https://e-words.jp/w/TOTP.html">TOTP</a>
    2020 , <a href="https://blog.apar.jp/program/12741/">PHP + Google Authenticator（TOTP）２段階認証の実装方法</a>

    <SubTitle subTitle="おわりに" />
    <p>
      最後まで読んでいただき、ありがとうございました。<br/>
      今回の記事では沢山のセキュリティー用語を簡潔に解説しました。忘れた時のために、ぜひブックマークをしてみてください。
    </p>
    
    </ArticalPage>
  );
}