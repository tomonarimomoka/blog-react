import { FC } from "react";
import {ArticalPage } from './Parts';

export const PlivacyPolicy: FC = () => {
    return(
        <ArticalPage title="当サイトが使用しているアクセス解析ツールについて">
            <p>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
            </p>
            <p>
            このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。 
            </p>
            <p>
            このトラフィックデータは匿名で収集されており、個人を特定するものではありません。 
            </p>
            <p>
            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
            </p>
            <p>
            詳しくは、<a href="https://marketingplatform.google.com/about/analytics/terms/jp/">Google アナリティクス利用規約</a>をご確認ください。
            </p> 
        </ArticalPage>
    );
}