import { FC } from "react";
import {ArticalPage , SubTitle , ReadBtn , References_link ,SourceCode} from '../Parts';

export const Index: FC = () => {
  return(
    <ArticalPage title="はじめてのAI駆逐開発">
      <SubTitle subTitle="やってみる" />
      
      <p>TypeScript×ReactをViteでテンプレート作る時のコマンドでまずはテンプレートを作ります。</p>
      <SourceCode>
      npm create vite@latest 任意の名前 -- --template react-ts
      </SourceCode>
      できたプロジェクトのフォルダの√ディレクトリまで異動してから、以下コマンドで必要なパッケージをインストールする
      <SourceCode>npm install</SourceCode>
      いかできどうする
      <SourceCode>npm run dev</SourceCode>

      LLMが作ってくれたソースコードはばっくえんどはFastAPIなので
      <SourceCode>pip install "fastapi[standard]"</SourceCode>

      
      <References_link url="https://fastapi.tiangolo.com/#typer-the-fastapi-of-clis" articleTitle="FastAPI公式ドキュメント"/>
      <References_link url="" articleTitle=""/>
      <ReadBtn url="" msg=""/>
    </ArticalPage>
  );
}