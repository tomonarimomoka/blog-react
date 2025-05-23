import { FC } from "react";
import {ArticalPage , SubTitle} from '../Parts';

export const ElementOfComputer: FC = () => {
  return( 
    <ArticalPage title="コンピュータの3大構成要素とは？">
    <SubTitle subTitle="コンピュータの3大構成要素" />
    <p>コンピュータの3大構成要素とは以下の3つ</p>
    <ul>
        <li>CPU</li>
        <li>メモリ</li>
        <li>補助記憶装置</li>
    </ul>
    <p>以下でそれぞれについて詳しく説明していきます。</p>
    <SubTitle subTitle="CPU" />
    <ul>
        <li>Central Processing Unitの略</li>
        <li>中央処理装置のこと</li>
        <li>コンピュータの脳みそと言われる</li>
        <li>「演算」と「制御」の2つの役割を担う</li>
        <li>コンピュータの中にあるCPUの数を「コア数」と呼ぶ</li>
        <li>コア数が多いほどコンピュータは高性能と言える</li>        
    </ul>
    <h4>参考リンク</h4>
    佐藤尚毅(学芸大学) , 2023 , <a href="http://kishou.u-gakugei.ac.jp/lectures/computer/lec02.pdf">講義資料</a>
    <br/>
    前田 知伸 , 2022 , <a href="https://www.pasokon-syobun.com/media/pc-replacement/cpu/">パソコンのCPUとは？性能や種類、見方をわかりやすく解説</a>
    <br/>
    <SubTitle subTitle="メモリ" />
    <p>
      メインメモリとキャッシュの二種類がある
    </p>
    <ul>
      <li>メインメモリ
        <ul>
          <li>CPUが直接データの読み書きをするための記憶装置</li>
          <li>数GB以下であることが多い</li>
          <li>メインメモリにはRAMとROMの2種類がある
            <ul>
              <li>RAM
                <ul>
                  <li>Random Access Memoryの略</li>
                  <li>読み書き可能</li>
                  <li>電源を落とすとデータが消える（揮発性）</li>
                  <li>メインメモリでは主にRAMを使う</li>
                </ul>
              </li>
              <li>ROM
                <ul>
                  <li>Read Only Memoryの略</li>
                  <li>読み込み専用</li>
                  <li>電源を落としてもデータが消えない（不揮発性）</li>
                </ul>
              </li>
          </ul>            
       </li>
    </ul>
      </li>
      <li>キャッシュメモリ</li>
      <ul>
        <li>データを一時的に保存して、再びそのデータにアクセスる時にデータを再利用するためのメモリ</li>
        <li>メインメモリよりも、かなり容量が小さく、高速</li>
        <li>サーバーから取得したデータを一時的に保存する場所</li>
      </ul>

    </ul>
    <h4>参考リンク</h4>
    MiniTool® Software Ltd. , 2023 , <a href="https://www.partitionwizard.jp/clone-disk/memory-vs-storage.html">メモリとストレージの違い？</a>
    <br/>
    佐藤尚毅(学芸大学) , 2023 , <a href="http://kishou.u-gakugei.ac.jp/lectures/computer/lec02.pdf">講義資料</a>
    <br/>
    佐々木　真 , 2021 , <a href="https://wa3.i-3-i.info/word15145.html">キャッシュメモリ（英：cache memory）とは</a>
    <br/>
    株式会社フォーサイト , <a href="https://www.foresight.jp/fe/column/main-memory/">主記憶装置（メモリ）とは？</a>
    <br/>
    <a href="https://medium-company.com/%e4%b8%bb%e8%a8%98%e6%86%b6%e8%a3%85%e7%bd%ae/">主記憶装置（メインメモリ）とは</a>
    <br/>

    <SubTitle subTitle="補助記憶装置" />
    <ul>
        <li>ストレージとも呼ばれる</li>
        <li>電源を落としてもデータが消えない（不揮発性）</li>
        <li>数百GBであることが多い</li>
        <li>私たちユーザーがファイルを直接保存する場所</li>
    </ul>
    <h4>参考リンク</h4>
    佐藤尚毅(学芸大学) , 2023 , <a href="http://kishou.u-gakugei.ac.jp/lectures/computer/lec02.pdf">講義資料</a>
    <br/>
    2022 , <a href="https://www.yamanjo.net/knowledge/structure/structure_04.html">補助記憶装置（1） ～ ストレージとは ～</a>
    <br/>
    <SubTitle subTitle="おわりに" />
    <p>
      最後まで読んでいただき、ありがとうございました。
      <br/>
      プログラマーは普段ハードウェアの仕組みを意識しませんが、エンジニアの常識として知っておきましょう！
    </p>
  
    </ArticalPage>
  );
}