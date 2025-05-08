import { FC } from "react";
import {HeaderNav ,  ArticalList ,SubTitle} from './Parts';
import './style.css'

export const ListTech: FC = () => {

    return(
        <>
            <HeaderNav />
            <SubTitle subTitle="♥解説系の記事一覧"/>
            <ArticalList title="ASVS用語集" fileName="security" explain="セキュリティに関する用語について簡潔にまとめています。" />
            <ArticalList title="コンピュータの3大構成要素とは？"  fileName="elementOfComputer" explain="基本情報技術者試験の試験範囲でもあるコンピュータの構成要素について記載しています。" />
            <ArticalList title="プロトコルとは？"  fileName="whatIsProtocol"  explain="プロトコルって何でしょう？この記事を読むと、ちゃんと説明できるようになります。" />
            <ArticalList title="HTTPメソッドとは？"  fileName="HTTPmethod"  explain="POSTとGET何ができるか、どう使い分けるかを解説しています。" />
            <ArticalList title="ブラックボックステストのテスト技法"  fileName="simpleTest"  explain="ソフトウェアのテストについて解説しています！面倒なイメージのソフトウェアテストですが、ちゃんと勉強してほかのエンジニアに一歩差をつけましょう！" />
            <ArticalList title="はじめてのGit"  fileName="gitForBeginner"  explain="初めてGitを使う人に向けた記事です。とりあえず使いたい！という人に向けた簡潔で実践的な内容です。" />
            <ArticalList title="仕事でつかえるGitコマンド集"  fileName="gitForTeam"  explain="仕事中にコマンドを忘れた時に確認できる記事です。" />
            <ArticalList title="初学者のためのAWS基本用語"  fileName="awsForBeginner"  explain="AWS初学者のためのAWSの基本用語を簡潔にまとめています。" />
            <ArticalList title="AWS主要サービス一覧"  fileName="awsListOfServices"  explain="主要なAWSサービスの一覧記事です。○○ってなんだっけ、というときにカンニングするために使ってください。" />
            <ArticalList title="Google Colabで処理を永続化する方法"  fileName="googleColab"  explain="Google Colabで処理を永続化する方法をまとめました！寝ている間にLLMの学習をさせたい人はぜひご覧ください。" />
            <ArticalList title="はじめてのStreamlit"  fileName="howToUseStreamlit"  explain="PythonのフレームワークであるStreamlitを初めて使う人のための記事です。" />
            <ArticalList title="はじめてのvim"  fileName="vimForBeginner"  explain="vimを初めて使う人のための記事です。" />
            <SubTitle subTitle="♥体験談系の記事一覧"/>
            <ArticalList title="一浪日大でもホワイト企業に就職する方法"  fileName="jobHuntting" explain="全くの０からソフトウェアエンジニアになるまでのリアルな体験記です。この記事は私の思いがこもっている特別な記事です。" />
            <ArticalList title="Java Silver合格体験記"  fileName="JavaSilver" explain="ベンダー資格の中で有名で名の通る資格であるJava Silverの合格体験記！" />
            <ArticalList title="Oracle Master Bronze合格体験記"  fileName="oracleBronzaDBA" explain="思ったよりも難しかったOracle Master Bronzaの合格体験記です。何かの事情で取らないといけない人は読んでみて下さい。" />
            <ArticalList title="【生成AI】ハッカソン参加レポート vol.1"  fileName="hakkason_1" explain="はじめてのハッカソンに参加した体験記です。ハッカソンに出てみたい人が知りたいであろう情報をまとめて、記事にしました！" />
            <ArticalList title="【生成AI】ハッカソン参加レポート vol.2"  fileName="hakkason_2" explain="生成AI系ハッカソンの参加レポートです。StreamlitというPythonフレームワークを用いて開発しました。" />
            <ArticalList title="【生成AI】ハッカソン参加レポート vol.3"  fileName="hakkason_3" explain="ハッカソンでの敗因を探り、優勝するためには何が必要かを考えます。優勝目指す方の参考になれば！" />
            <ArticalList title="【発表】LT会参加レポート"  fileName="firstLTparty" explain="はじめてのLT会に参加した体験記です。LT会でどんな発表をすれば良いのか、どんな資料を用意すればよいのかが分かります。ハードルが高いLT会ですが、面白さが伝わればいいなと思って書き綴りました。" />
            <ArticalList title="【聞き専】TSkaigi参加レポート"  fileName="TSkaigiReport" explain="TSkaigiのLT会に参加した体験記です。内容をまとめたので、参加できなかった方や、今後参加を迷っている方の参考になるはずです！！" />
        </>
    )
}