import { FC } from "react";
import {ArticleCard , SubTitle , FlexBox} from '../Parts';

export const ListFistSeries: FC = () => {

    return(
        <>  
            <SubTitle subTitle="♥はじめてシリーズの記事一覧"/>
            <FlexBox>
                <ArticleCard title="はじめてのGit"  fileName="gitForBeginner" > 初めてGitを使う人に向けた記事です。とりあえず使いたい！という人に向けた簡潔で実践的な内容です</ArticleCard> 
                <ArticleCard title="はじめてのStreamlit"  fileName="howToUseStreamlit" > PythonのフレームワークであるStreamlitを初めて使う人のための記事です</ArticleCard> 
                <ArticleCard title="はじめてのvim"  fileName="vimForBeginner" > vimを初めて使う人のための記事です</ArticleCard> 
                <ArticleCard title="はじめての転職"  fileName="FirstCareerChange" > はじめての転職についての記事です。具体的な転職時のすっぺくなども公開！</ArticleCard>
            </FlexBox>
        </>
    )
}