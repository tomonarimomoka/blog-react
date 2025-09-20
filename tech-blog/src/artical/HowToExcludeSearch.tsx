import { FC } from "react";
import {ArticalPage , SubTitle , ReadBtn , References_link } from '../Parts';

export const Index: FC = () => {
  return(
    <ArticalPage title="">
      <SubTitle subTitle="test" />
      <p></p>
      <References_link url="https://devo.jp/seolaboratory/65768/" articleTitle="検索オプションとは？Google検索をもっと便利にするコマンドまとめ"/>
      <References_link url="https://support.google.com/websearch/answer/2466433" articleTitle="Google 検索の結果を絞り込む"/>
      <References_link url="" articleTitle=""/>
      <ReadBtn url="" msg=""/>
    </ArticalPage>
  );
}