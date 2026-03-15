import { FC } from "react";
import {ArticalPage , SubTitle , ReadBtn , References_link } from '../Parts';

export const Index: FC = () => {
  return(
    <ArticalPage title="">
      <SubTitle subTitle="test" />
      <p></p>
      <References_link url="" articleTitle=""/>
      <ReadBtn url="" msg=""/>
    </ArticalPage>
  );
}