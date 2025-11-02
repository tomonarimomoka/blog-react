import { FC } from "react";
import {ArticalPage , SubTitle , ReadBtn , References_link } from '../Parts';

export const Index: FC = () => {
  return(
    <ArticalPage title="【OS】はじめての自作OS">
      <SubTitle subTitle="はじめに" />
      <p>
        みなさんは、「OSを作るなんて難しそう」「ごく一部のゴリゴリエンジニアしかできなそう」と思っていませんか？
        わたしもそう思っていました。もちろん、プログラミング初心者のような方には難しいと思いますがふつうのエンジニアであれば、作ることができます！
      </p>
      <SubTitle subTitle="自作OSに挑戦するメリット" />
      <p>
        今更自作OSなんて流行っていないし、やる意味あるの？と思いますか？
        実は自作OSを作ることでいろいろなことを学べます。
      </p>
      <SubTitle subTitle="勉強法" />
        <p>
            私は一番有名な「<a href="">OS自作入門</a>」で勉強しました。
            YouTubeで<a href="">東工大講義</a>も観ることができ、非常に低コストで勉強することができます。
        </p>
        <p>
            少し面倒ですが、OSを動かすための実機があると勉強を楽しく進めることができます。
            私は昔使っていたLaptopをテスト端末にしました。
            実機での自作OS起動は少し面倒くさく、コツが要ります。「～～する方法」をご覧ください。<ReadBtn url="" />
        </p>

      <SubTitle subTitle="おわりに" />
      <p>自作OSの魅力は伝わりましたか？自作OS界隈を盛り上げていきましょう✨</p>
      <p>当サイトでは自作OSに関する記事を取り揃えています。ぜひご覧ください。</p>
      <References_link url="" articleTitle=""/>
    </ArticalPage>
  );
}