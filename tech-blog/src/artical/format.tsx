import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn ,LastUpdate , References_link } from '../Parts';
import '../style.css'

export const Index: FC = () => {
  
  return(
    <>    
      <HeaderNav />
      <LastUpdate/>
      <h1 id="articleTitle"></h1>

      <SubTitle subTitle="test" />
      <p></p>
      <References_link url="" articleTitle=""/>
      <ReadBtn url="" msg=""/>
    </>
  );
}