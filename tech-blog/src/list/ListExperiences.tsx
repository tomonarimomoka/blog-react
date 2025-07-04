import { FC } from "react";
import {ArticleCard , SubTitle , FlexBox} from '../Parts';

export const ListExperiences: FC = () => {

    return(
        <>  
            <SubTitle subTitle="♥体験談シリーズの記事一覧"/>
            <FlexBox>
                <ArticleCard title="一浪日大でもホワイト企業に就職する方法"  component="JobHuntting" > 全くの０からソフトウェアエンジニアになるまでのリアルな体験記です。この記事は私の思いがこもっている特別な記事です</ArticleCard> 
                <ArticleCard title="はじめての転職"  component="FirstCareerChange" > はじめての転職についての記事です。具体的な転職時のすっぺくなども公開！</ArticleCard>
                <ArticleCard title="Java Silver合格体験記"  component="JavaSilver" > ベンダー資格の中で有名で名の通る資格であるJava Silverの合格体験記！</ArticleCard>
                <ArticleCard title="Oracle Master Bronze合格体験記"  component="OracleBronzaDBA" > 思ったよりも難しかったOracle Master Bronzaの合格体験記です。何かの事情で取らないといけない人は読んでみて下さい</ArticleCard> 
                <ArticleCard title="【生成AI】ハッカソン参加レポート vol.1"  component="Hakkason_1" > はじめてのハッカソンに参加した体験記です。ハッカソンに出てみたい人が知りたいであろう情報をまとめて、記事にしました！</ArticleCard>
                <ArticleCard title="【生成AI】ハッカソン参加レポート vol.2"  component="Hakkason_2" > 生成AI系ハッカソンの参加レポートです。StreamlitというPythonフレームワークを用いて開発しました</ArticleCard> 
                <ArticleCard title="【生成AI】ハッカソン参加レポート vol.3"  component="Hakkason_3" > ハッカソンでの敗因を探り、優勝するためには何が必要かを考えます。優勝目指す方の参考になれば！</ArticleCard>
                <ArticleCard title="【発表】LT会参加レポート"  component="FirstLTparty" > はじめてのLT会に参加した体験記です。LT会でどんな発表をすれば良いのか、どんな資料を用意すればよいのかが分かります。ハードルが高いLT会ですが、面白さが伝わればいいなと思って書き綴りました</ArticleCard> 
                <ArticleCard title="【聞き専】TSkaigi参加レポート"  component="TSkaigiReport"> TSkaigiのLT会に参加した体験記です。内容をまとめたので、参加できなかった方や、今後参加を迷っている方の参考になるはずです！！</ArticleCard>
            </FlexBox>
        </>
    )
}