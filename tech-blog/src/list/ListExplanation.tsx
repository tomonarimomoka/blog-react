import { FC } from "react";
import {ArticleCard , SubTitle , FlexBox} from '../Parts';

export const ListExplanation: FC = () => {

    return(
        <>  
            <SubTitle subTitle="♥技術解説シリーズの記事一覧"/>
            <FlexBox>
                <ArticleCard title="ASVS用語集" fileName="security" >セキュリティに関する用語について簡潔にまとめています</ArticleCard> 
                <ArticleCard title="コンピュータの3大構成要素とは？"  fileName="elementOfComputer" > 基本情報技術者試験の試験範囲でもあるコンピュータの構成要素について記載しています</ArticleCard> 
                <ArticleCard title="プロトコルとは？"  fileName="whatIsProtocol" > プロトコルって何でしょう？この記事を読むと、ちゃんと説明できるようになります</ArticleCard> 
                <ArticleCard title="HTTPメソッドとは？"  fileName="HTTPmethod" > POSTとGET何ができるか、どう使い分けるかを解説しています</ArticleCard> 
                <ArticleCard title="ブラックボックステストのテスト技法"  fileName="simpleTest" > ソフトウェアのテストについて解説しています！面倒なイメージのソフトウェアテストですが、ちゃんと勉強してほかのエンジニアに一歩差をつけましょう！</ArticleCard>
                <ArticleCard title="はじめてのGit"  fileName="gitForBeginner" > 初めてGitを使う人に向けた記事です。とりあえず使いたい！という人に向けた簡潔で実践的な内容です</ArticleCard> 
                <ArticleCard title="仕事でつかえるGitコマンド集"  fileName="gitForTeam" > 仕事中にコマンドを忘れた時に確認できる記事です</ArticleCard> 
                <ArticleCard title="初学者のためのAWS基本用語"  fileName="awsForBeginner" > AWS初学者のためのAWSの基本用語を簡潔にまとめています</ArticleCard> 
                <ArticleCard title="AWS主要サービス一覧"  fileName="awsListOfServices" > 主要なAWSサービスの一覧記事です。○○ってなんだっけ、というときにカンニングするために使ってください</ArticleCard> 
                <ArticleCard title="Google Colabで処理を永続化する方法"  fileName="googleColab" > Google Colabで処理を永続化する方法をまとめました！寝ている間にLLMの学習をさせたい人はぜひご覧ください</ArticleCard> 
                <ArticleCard title="はじめてのStreamlit"  fileName="howToUseStreamlit" > PythonのフレームワークであるStreamlitを初めて使う人のための記事です</ArticleCard> 
                <ArticleCard title="はじめてのvim"  fileName="vimForBeginner" > vimを初めて使う人のための記事です</ArticleCard> 
                <ArticleCard title="HTMLからReactに移植する方法"  fileName="HowToMigrateBlog" > HTML・CSSで書かれた静的なサイトからTypeScrip×Reactにマイグレーションする方法を解説！</ArticleCard>
                <ArticleCard title="はじめてのLinux" fileName="FirstLinux" >Linuxを使い始めるときに、初めに覚えるべきコマンドを紹介！用途別に紹介しているためコマンドを全く知らなくても、調べやすいはずです。</ArticleCard>
            </FlexBox>
        </>
    )
}