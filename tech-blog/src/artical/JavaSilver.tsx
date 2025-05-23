import { FC } from "react";
import {ArticalPage , SubTitle , ReadBtn , CustomTable , Img_30} from '../Parts';

export const JavaSilver: FC = () => {
  return(
    <ArticalPage title="Java Silver 合格体験記">
    <SubTitle subTitle="私のスペック" />
    <ul>
      <li>ぴよぴよ新卒🐤</li>
      <li>大学時代からプログラミングは好きでやっていた</li>
      <li>一浪日大（物覚えは少し悪め...）</li>
    </ul>
    <SubTitle subTitle="使った教材" />
    <p>以下の2つだけです。</p>
    <ul>
      <li>王道の<a href="https://amzn.asia/d/8J109FA">黒本</a></li>
      <li><a href="https://www.youtube.com/channel/UC42DlV-0RDb6fJ8A3IbAang">志賀先生のyoutube</a></li>
    </ul>
    <p>
      志賀先生は黒本の著者の方です。
      YouTubeでは、直接点数に繋がるというよりは根本的な理解につながる解説動画を上げてくださっています。
      私のように学生時代に情報学を専攻していなかった人は必見です。<br/><br/>
      それに、、志賀先生はとってもかっこいいんです💕
    </p>

    <SubTitle subTitle="勉強量" />
    <p>
      合格までの勉強時間は約110時間で、黒本3.5周やりました。<br/>
      <br/>
      1回目の受験では、プログラミン自体やJavaの初学者というわけではなかったので、油断していて12日前から勉強を始めました。<br/>
      黒本の１～１１章を2周と、志賀先生のyoutubeでJava Silver向けの動画は概ね視聴しました。<br/>
      受験結果は正答率48%という恥ずかしい結果でした。。。<br/>
      ここでの敗因は過去問対策を行わなかったことです( ；∀；)<br/>     
    </p>
    <p>
      反省を活かして一か月後に再挑戦！（と思ったがやる気が出ず一週間くらい勉強しなかった...笑）<br/>
      2回目の受験では、黒本3週目、4週目もやろうと計画しました。<br/>
      しかし、仕事でうまくいかず勉強時間が足りなくなったので4週目は点数が70%以下の章のみにしました。<br/>
      <br/>
      そして、過去問を対策もしっかりやりました。黒本には模擬試験として2回分の問題が12、13章に用意されています。<br/>
      この模試の1回分は3回解きました。2回目は落ちれないと思い、
      間違えた問題の復習や解き直しは全部で5回以上は行いました🔥🔥🔥<br/>
      <br/>
      以下に得点の推移を載せるのでご参考までにどうぞ(*'▽')
    </p>
    <CustomTable>
      <tr><th></th><th colSpan={5}>得点率</th></tr>
      <tr><th>章</th><th>1回目</th><th>2回目</th><th>3回目</th><th>4回目</th><th>5回目</th></tr>
      <tr><td>1</td><td>50</td><td>87</td><td>75</td><td></td><td></td></tr>
      <tr><td>2</td><td>22</td><td>77</td><td>77</td><td></td><td></td></tr>
      <tr><td>3</td><td>42</td><td>71</td><td>71</td><td></td><td></td></tr>
      <tr><td>4</td><td>52</td><td>88</td><td>88</td><td></td><td></td></tr>
      <tr><td>5</td><td>10</td><td>30</td><td>80</td><td>60</td><td>80</td></tr>
      <tr><td>6</td><td>46</td><td>66</td><td>70</td><td></td><td></td></tr>
      <tr><td>7</td><td>47</td><td>57</td><td>61</td><td>66</td><td>85</td></tr>
      <tr><td>8</td><td>0</td><td>62</td><td>75</td><td></td><td></td></tr>
      <tr><td>9</td><td>31</td><td>63</td><td>63</td><td>89</td><td></td></tr>
      <tr><td>10</td><td>29</td><td>70</td><td>52</td><td>82</td><td></td></tr>
      <tr><td>11</td><td>0</td><td>71</td><td>57</td><td>85</td><td></td></tr>
      <tr><td>12</td><td>50</td><td>89</td><td>77</td><td></td><td></td></tr>
      <tr><td>13</td><td>50</td><td></td><td></td><td></td><td></td></tr>
      <tr><td>本番</td><td>48</td><td>76</td><td></td><td></td><td></td></tr>
    </CustomTable>
      
    <SubTitle subTitle="前日と当日" />
    <p>      
      模擬試験の1回分（黒本13章）は実力試しのために残していたので、前日に初めて解きました。<br/>
      結構わかる♪ と思ってワクワクしながら採点すると<br/><br/>
      なんと<br/><br/>
      正答率50%、、、<br/><br/>
      もう終わったと思いました。。。
      <br/>
      合格体験記ブログに模擬試験から出ると書いてあったので、泣きながら直して何度もやり直す時間はないのでしっかり復習しました。<br/>
      当日の朝は何度も解いていた12章の以前間違えたことのある問題を解き直し、心を落ちつけました。<br/>
    </p>  
    <SubTitle subTitle="受験本番" />
    <p>
      注意事項としては以下の3つです。<br/>
      (1) 身分証明書を忘れないこと<br/>
      (2) 15分以上前には会場につくこと<br/>
      (3) 試験前には必ずトイレにいくこと<br/>
      <br/>
      試験時間は3時間ととても長いです。集中力やお手洗いのことを考えると2時間くらいで解ききれると安心です。私も実際2時間ちょっとで提出し退出しました。<br/>
      私は身分証明書としてパスポートとマイナンバーカードを使いました。<br/>
      持ち物としては目薬の使用が認められているので、持っていきました！リフレッシュできるのでおすすめです。
    </p>
    
    <p>
      試験本番では黒本の模擬試験でやった問題が結構出てきました！初めは不安でしたが、絶対受かる！と思いながら提出ボタンを押すことができました。<br/><br/>
      そして、、、合格✨<br/>
      受験結果は正答率76％でした✨<br/>
    </p>
    
    <Img_30 path="/assets/SILVSE11JPN.jpg" alt="認定バッチ" />
    <SubTitle subTitle="おわりに" />
    <p>
      最後まで読んでいただき、ありがとうございました。
      <br/>
      この資格は普段Javaを使っていても勉強しないと受かりません。しっかり勉強してほかのプログラマーに差をつけましょう！
    </p>
    
  <p>
    Oracleのベンダー資格にご興味があれば、<ReadBtn url="/OracleBronzaDBA" msg="Oracle Master Bronze合格体験記" />
    もぜひご覧ください！
  </p>
  
    </ArticalPage>
  );
}