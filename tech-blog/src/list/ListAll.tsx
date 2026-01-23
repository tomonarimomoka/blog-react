import { FC } from "react";
import {ArticleCard , SubTitle , FlexBox} from '../Parts';

export const ListAll: FC = () => {

    return(
        <>  
            <SubTitle subTitle="♥全てのの記事一覧"/>
            <FlexBox>
                <ArticleCard title="ASVS用語集" component="Security" >セキュリティに関する用語について簡潔にまとめています</ArticleCard> 
                <ArticleCard title="コンピュータの3大構成要素とは？"  component="ElementOfComputer" > 基本情報技術者試験の試験範囲でもあるコンピュータの構成要素について記載しています</ArticleCard> 
                <ArticleCard title="プロトコルとは？"  component="WhatIsProtocol" > プロトコルって何でしょう？この記事を読むと、ちゃんと説明できるようになります</ArticleCard> 
                <ArticleCard title="HTTPメソッドとは？"  component="HTTPmethod" > POSTとGET何ができるか、どう使い分けるかを解説しています</ArticleCard> 
                <ArticleCard title="ブラックボックステストのテスト技法"  component="SimpleTest" > ソフトウェアのテストについて解説しています！面倒なイメージのソフトウェアテストですが、ちゃんと勉強してほかのエンジニアに一歩差をつけましょう！</ArticleCard>
                <ArticleCard title="はじめてのGit"  component="GitForBeginner" > 初めてGitを使う人に向けた記事です。とりあえず使いたい！という人に向けた簡潔で実践的な内容です</ArticleCard> 
                <ArticleCard title="仕事でつかえるGitコマンド集"  component="GitForTeam" > 仕事中にコマンドを忘れた時に確認できる記事です</ArticleCard> 
                <ArticleCard title="初学者のためのAWS基本用語"  component="AwsForBeginner" > AWS初学者のためのAWSの基本用語を簡潔にまとめています</ArticleCard> 
                <ArticleCard title="AWS主要サービス一覧"  component="AwsListOfServices" > 主要なAWSサービスの一覧記事です。○○ってなんだっけ、というときにカンニングするために使ってください</ArticleCard> 
                <ArticleCard title="Google Colabで処理を永続化する方法"  component="GoogleColab" > Google Colabで処理を永続化する方法をまとめました！寝ている間にLLMの学習をさせたい人はぜひご覧ください</ArticleCard> 
                <ArticleCard title="はじめてのStreamlit"  component="HowToUseStreamlit" > PythonのフレームワークであるStreamlitを初めて使う人のための記事です</ArticleCard> 
                <ArticleCard title="はじめてのvim"  component="VimForBeginner" > vimを初めて使う人のための記事です</ArticleCard> 
                <ArticleCard title="HTMLからReactに移植する方法"  component="HowToMigrateBlog" > HTML・CSSで書かれた静的なサイトからTypeScrip×Reactにマイグレーションする方法を解説！</ArticleCard>
                <ArticleCard title="はじめてのLinux" component="FirstLinux" >Linuxを使い始めるときに、初めに覚えるべきコマンドを紹介！用途別に紹介しているためコマンドを全く知らなくても、調べやすいはずです。</ArticleCard>
                <ArticleCard title="はじめての転職"  component="FirstCareerChange" > はじめての転職についての記事です。具体的な転職時のすっぺくなども公開！</ArticleCard>
                <ArticleCard title="はじめてのPC交換"  component="FirstPcChange" > エンジニアがPCを交換するときにやるべきことをまとめました。私用PCの交換は面倒なことがたくさんありますが、この記事を読めば次交換するときには手間が減る工夫も分かります！！</ArticleCard>
                <ArticleCard title="一浪日大でもホワイト企業に就職する方法"  component="JobHuntting" > 全くの０からソフトウェアエンジニアになるまでのリアルな体験記です。この記事は私の思いがこもっている特別な記事です</ArticleCard> 
                <ArticleCard title="Java Silver合格体験記"  component="JavaSilver" > ベンダー資格の中で有名で名の通る資格であるJava Silverの合格体験記！</ArticleCard>
                <ArticleCard title="Oracle Master Bronze合格体験記"  component="OracleBronzaDBA" > 思ったよりも難しかったOracle Master Bronzaの合格体験記です。何かの事情で取らないといけない人は読んでみて下さい</ArticleCard> 
                <ArticleCard title="【生成AI】ハッカソン参加レポート vol.1"  component="Hakkason_1" > はじめてのハッカソンに参加した体験記です。ハッカソンに出てみたい人が知りたいであろう情報をまとめて、記事にしました！</ArticleCard>
                <ArticleCard title="【生成AI】ハッカソン参加レポート vol.2"  component="Hakkason_2" > 生成AI系ハッカソンの参加レポートです。StreamlitというPythonフレームワークを用いて開発しました</ArticleCard> 
                <ArticleCard title="【生成AI】ハッカソン参加レポート vol.3"  component="Hakkason_3" > ハッカソンでの敗因を探り、優勝するためには何が必要かを考えます。優勝目指す方の参考になれば！</ArticleCard>
                <ArticleCard title="【発表】LT会参加レポート"  component="FirstLTparty" > はじめてのLT会に参加した体験記です。LT会でどんな発表をすれば良いのか、どんな資料を用意すればよいのかが分かります。ハードルが高いLT会ですが、面白さが伝わればいいなと思って書き綴りました</ArticleCard> 
                <ArticleCard title="【聞き専】TSkaigi参加レポート"  component="TSkaigiReport"> TSkaigiのLT会に参加した体験記です。内容をまとめたので、参加できなかった方や、今後参加を迷っている方の参考になるはずです！！</ArticleCard>
                <ArticleCard title="レビュー方法の提案【ABCG法】" component="FirstCodeReview">私はコードレビューにいくつかの課題を感じていました。そこで私が考えたレビュー方法を提案します！</ArticleCard>
                <ArticleCard title="【OS自作】SurfaceでUEFIアプリをUSB起動する方法/How to boot by USB in UEFI device" component="HowToBootSurfaceByUSB">
                    Microsoft SurfaceでUSBドライブからUEFIアプリケーションを起動する方法をまとめました。OS自作などに役立つ記事です。
                </ArticleCard>
            </FlexBox>
        </>
    )
}