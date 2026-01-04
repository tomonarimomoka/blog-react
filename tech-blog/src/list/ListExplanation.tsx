import { FC } from "react";
import {ArticleCard , SubTitle , FlexBox} from '../Parts';

export const ListExplanation: FC = () => {

    return(
        <>  
            <SubTitle subTitle="♥技術解説シリーズの記事一覧"/>
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
                <ArticleCard title="【OS自作】SurfaceでUEFIアプリをUSB起動する方法/How to boot by USB in UEFI device" component="HowToBootSurfaceByUSB">
                    Microsoft SurfaceでUSBドライブからUEFIアプリケーションを起動する方法をまとめました。OS自作などに役立つ記事です。
                </ArticleCard>
            </FlexBox>
        </>
    )
}