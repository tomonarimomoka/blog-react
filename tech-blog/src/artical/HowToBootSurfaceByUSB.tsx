import { FC } from "react";
import {ArticalPage , SubTitle , ReadBtn , References_link } from '../Parts';

export const Index: FC = () => {
  return(
    <ArticalPage title="Surfaceで機械語のファイルをUSB起動する方法">
      <SubTitle subTitle="想定読者" />
      <p>下記を想定読者とします。</p>
      <ul>
        <li>windows surface利用者</li>
        <li>USBドライブからOSを起動したい人</li>
      </ul>
      <References_link url="https://support.microsoft.com/ja-jp/surface/usb-%E3%83%87%E3%83%90%E3%82%A4%E3%82%B9%E3%81%8B%E3%82%89-surface-%E3%82%92%E8%B5%B7%E5%8B%95%E3%81%99%E3%82%8B-fe7a7323-8d1d-823d-be17-9aec89c4f9f5" articleTitle="UEFI"/>
      <References_link url="" articleTitle=""/>
      <ReadBtn url="" msg=""/>
    </ArticalPage>
  );
}