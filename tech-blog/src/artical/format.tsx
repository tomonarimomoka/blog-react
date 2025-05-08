import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn ,References} from '../Parts';
import './style.css'

export const Index: FC = () => {
  var ref:string[][] = [[] ,[] ,[] ] 
  return(
    <>    
      <HeaderNav />

      <SubTitle subTitle="test" />
      <p></p>
      <References contens={ref}/>

    </>
  );
}