import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn ,References , LastUpdate} from '../Parts';
import '../style.css'

export const HowToUseStreamlit: FC = () => {
  var ref:string[][] = [[] ,[] ,[] ] 
  return(
    <>

<HeaderNav />
  
  <main className="box">
    
    <h1 id="articleTitle">はじめてのStreamlit</h1>
    <div className="right">
      <LastUpdate/>
      <time id="modify"></time>
      です。
      <script>
        /* 更新日の取得 */
        const last = new Date(document.lastModified);
        const year = last.getFullYear();
        const month = last.getMonth() + 1;
        const date = last.getDate();
        /* 日付を書き換える */
        const target = document.getElementById('modify');
        target.textContent = year + '-' + month + '-' + date;
      </script>
    </div>
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
        <code className="codeBlock">
          pip install streamlit
        </code>
      </li>
      <li>
        Pythonで、Hello world!を書く
        <pre><code className="codeBlock">import streamlit as st
st.write("Hello world")</code></pre>
      </li>
      <li>
        Pythonプログラムの実行<br/>
        <code className="codeBlock">
          streamlit run app.py
        </code>
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