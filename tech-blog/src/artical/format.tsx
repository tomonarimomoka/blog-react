import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn ,LastUpdate ,References} from '../Parts';
import '../style.css'

export const Index: FC = () => {
  var ref:string[][] = [[] ,[] ,[] ] 
  return(
    <>    
      <HeaderNav />
      <LastUpdate/>
      <h1 id="articleTitle"></h1>

      <SubTitle subTitle="test" />
      <p></p>
      <References contens={ref}/>

    </>
  );
}