import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn , References_link , References_book, SourceCode , LastUpdate} from '../Parts';
import '../style.css'

export const VimForBeginner: FC = () => {
  
  return(
    <>

<HeaderNav />
  
  <main className="box">
    
    <h1 id="articleTitle">はじめてのvim</h1>
    <LastUpdate/>
    <SubTitle subTitle="vimとは" />
    <p>vimとは、CUIで使えるエディターのことです。</p>
    <p>
      つまり、CMDとかpowershellとかターミナルとかで使えるファイルを書き換えることができるプログラムのことです。
      普通はファイルを開いて、ファイルを編集しますが、コマンドラインでファイルを編集出来ます。
    </p>
        
    <SubTitle subTitle="vimのモードとは？" />
    <p>
      vimにはモードという考え方があります。モードを意識しないと、意図したとおりにコマンドが挙動しないので注意しましょう。
      insertモードのときは、ターミナルの下の方に「-- INSERT --」と表示されます。
    </p>
    <p>
      vimのモードは沢山ありますが、初学者が初めに覚えるべきは以下の2つでしょう。
    </p>
    <ul>      
      <li>insertモード</li>
      <li>normalモード</li>
    </ul>
    <p>
      vimではファイルを編集することが多いかと思いますが、その時にはinsertモードにすることでファイルを編集出来ます。
      <b>insertモードに入るには「i」を入力する</b>だけです。
      insertモードのときは、ターミナルの下の方に「-- INSERT --」と表示されます。
    </p>
    <img src="/assets/vim-insert.png" className="imgSize_90" alt="insertモード" />


    <SubTitle subTitle="ファイルを編集する" />
    <ol>
      <li>「i」を押して、insertモードに入る</li>
      <li>ファイルを編集する</li>
      <li>Escキーを押して、insertモードから抜け、normalモードに戻る</li>
      <li>保存するため、<SourceCode>:wq</SourceCode>を入力 </li>
      <li>Enterキーを押す</li>
    </ol>

    <SubTitle subTitle="保存してvimモードから抜ける" />
    <ol>
      <li>Eacキーを押す</li>
      <li><SourceCode>:wq</SourceCode>を入力 </li>
      <li>Enterキーを押す</li>
    </ol>
    
    <SubTitle subTitle="保存せずにvimモードから抜ける" />
    <ol>
      <li>Eacキーを押す</li>
      <li><SourceCode>:wq</SourceCode>を入力 </li>
      <li>Enterキーを押す</li>
    </ol>
    
  <SubTitle subTitle="おわりに" />
    <p>
      読んでくださりありがとうございます。vimに怖がらなくて済むことを願っています！
    </p>
  
    <h4>参考</h4>
    <References_link lastUpdate="2020" url="https://www.tohoho-web.com/vim/about.html" articleTitle="とほほのVim入門(概要)" />
    <References_link author="vimdoc-ja プロジェクト" lastUpdate="2024" url="https://vim-jp.org/vimdoc-ja/" articleTitle="Vim日本語ドキュメント" />
    <References_link url="https://howpon.com/21851" author="Howpon" lastUpdate="2020" articleTitle="Vim – モードの種類と切り替える方法【モード表示の変更も】" />

  </main>
    </>
  );
}