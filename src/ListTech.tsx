import { FC } from "react";
import {ArticleCard , SubTitle , FlexBox} from './Parts';

export const ListTech: FC = () => {

    return(
        <>  
        
            <SubTitle subTitle="♥記事カテゴリ一覧"/>
            <p>たくさんの記事を取り揃えております。カテゴリに分けているので、サイト内を散策してみてください💗</p>
            <FlexBox>
                <ArticleCard title="全ての記事" component="ListAll" >全ての記事が見られます。</ArticleCard> 
                <ArticleCard title="はじめてシリーズ" component="ListFistSeries" >初学者向けの記事を集めました。</ArticleCard> 
                <ArticleCard title="体験談シリーズ" component="ListExperiences" >体験談を集めました。</ArticleCard> 
                <ArticleCard title="技術解説シリーズ" component="ListExplanation" >様々な技術解説を集めました。</ArticleCard> 
            </FlexBox>
        </>
    )
}