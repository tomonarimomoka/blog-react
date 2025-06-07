import { FC } from "react";
import {ArticleCard , SubTitle , FlexBox} from '../Parts';

export const ListAll: FC = () => {

    return(
        <>  
            <SubTitle subTitle="♥全てのの記事一覧"/>
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
                <ArticleCard title="はじめての転職"  fileName="FirstCareerChange" > はじめての転職についての記事です。具体的な転職時のすっぺくなども公開！</ArticleCard>
                <ArticleCard title="一浪日大でもホワイト企業に就職する方法"  fileName="jobHuntting" > 全くの０からソフトウェアエンジニアになるまでのリアルな体験記です。この記事は私の思いがこもっている特別な記事です</ArticleCard> 
                <ArticleCard title="Java Silver合格体験記"  fileName="JavaSilver" > ベンダー資格の中で有名で名の通る資格であるJava Silverの合格体験記！</ArticleCard>
                <ArticleCard title="Oracle Master Bronze合格体験記"  fileName="oracleBronzaDBA" > 思ったよりも難しかったOracle Master Bronzaの合格体験記です。何かの事情で取らないといけない人は読んでみて下さい</ArticleCard> 
                <ArticleCard title="【生成AI】ハッカソン参加レポート vol.1"  fileName="hakkason_1" > はじめてのハッカソンに参加した体験記です。ハッカソンに出てみたい人が知りたいであろう情報をまとめて、記事にしました！</ArticleCard>
                <ArticleCard title="【生成AI】ハッカソン参加レポート vol.2"  fileName="hakkason_2" > 生成AI系ハッカソンの参加レポートです。StreamlitというPythonフレームワークを用いて開発しました</ArticleCard> 
                <ArticleCard title="【生成AI】ハッカソン参加レポート vol.3"  fileName="hakkason_3" > ハッカソンでの敗因を探り、優勝するためには何が必要かを考えます。優勝目指す方の参考になれば！</ArticleCard>
                <ArticleCard title="【発表】LT会参加レポート"  fileName="firstLTparty" > はじめてのLT会に参加した体験記です。LT会でどんな発表をすれば良いのか、どんな資料を用意すればよいのかが分かります。ハードルが高いLT会ですが、面白さが伝わればいいなと思って書き綴りました</ArticleCard> 
                <ArticleCard title="【聞き専】TSkaigi参加レポート"  fileName="TSkaigiReport"> TSkaigiのLT会に参加した体験記です。内容をまとめたので、参加できなかった方や、今後参加を迷っている方の参考になるはずです！！</ArticleCard>
            </FlexBox>
        </>
    )
}