import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn ,References , SourceCode , LastUpdate} from '../Parts';
import '../style.css'

export const HowToUseStreamlit: FC = () => {
  var ref:string[][] = [[] ,[] ,[] ] 
  return(
    <>

<HeaderNav />
  
  <main className="box">
    
    <h1 id="articleTitle">はじめてのStreamlit</h1>
    <LastUpdate/>
    <SubTitle subTitle="Streamlitとは？" />
    <p>StreamlitとはPythonで簡単にWebアプリケーションを作れるフレームワークです。</p>
    <p>簡単に作れるので、ハッカソンにおすすめです。
      <ReadBtn url="hakkason_2" msg="ハッカソン記事"/>
    </p>
    <SubTitle subTitle="驚くほど簡単なStreamlitの導入方法" />
    <p>streamlitをはじめて使ったのですが、驚くほど簡単に使うことができました。導入に当たってやることは以下の3つの手順だけ！</p>
    <ol>
      <li>
        streamlitのインストール<br/>
        <SourceCode>pip install streamlit</SourceCode>
      </li>
      <li>
        Pythonで、Hello world!を書く
        <SourceCode>import streamlit as st
st.write("Hello world")</SourceCode>
      </li>
      <li>
        Pythonプログラムの実行<br/>
        <SourceCode>streamlit run app.py</SourceCode>
      </li>
    </ol>
    <h4>参考リンク</h4>
    2025 , <a href="https://docs.streamlit.io/get-started/installation">Streamlit公式サイト</a><br/>
    2024 , <a href="https://qiita.com/papasim824/items/1804bc1bd8d4c195d8a8">【15分で出来る】Streamlit爆速入門</a>
    <br/>
    
    <SubTitle subTitle="サンプルコード" />
    <p>私が作ったStreamlitでOpenAIのAPIを活用したWebアプリケーションのソースコードです。背景色の変更やボタン押下処理など、参考になれば幸いです。</p>
    <a href="https://github.com/tomonarimomoka/GPT_makePlan">https://github.com/tomonarimomoka/GPT_makePlan</a>
    <br/>
    <a href="https://github.com/tomonarimomoka/makePositiveNews-public">https://github.com/tomonarimomoka/makePositiveNews-public</a>   
  </main>
    </>
  );
}