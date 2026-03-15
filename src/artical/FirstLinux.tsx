import { FC } from "react";
import {ArticalPage , SubTitle , ReadBtn , SourceCode} from '../Parts';

export const FirstLinux: FC = () => {
  return(
    <ArticalPage title="はじめてのLinux">
      <SubTitle subTitle="本記事の対象者" />
      <ul>      
        <li>はじめてのLinuxを使う人</li>
      </ul>
      <p>本記事では、ディレクトリの移動とファイルやフォルダのCRUDについて解説します♪</p>
      <SubTitle subTitle="今いる場所を移動する　cd コマンド" />
      <p>基本中の基本、ディレクトリの移動です。</p>
      <h3>■任意の場所に移動する</h3>
      <SourceCode> cd ＜任意のパス＞</SourceCode>
      <h3>■一つ上に移動する</h3>
      <SourceCode> cd ../</SourceCode>

      <SubTitle subTitle="フォルダ構成を見る　ls コマンド" />
      <p>コマンドを実行する前に見たいフォルダまで移動してから実行してください。</p>
      <h3>■通常のフォルダのみを閲覧する</h3>
      <SourceCode>ls</SourceCode>
      <h3>■隠しファイルも閲覧する</h3>
      <SourceCode>ls -a</SourceCode>

      <SubTitle subTitle="ファイルを見る　cat コマンド" />
      <p>コマンドを実行する前に見たいフォルダまで移動してから実行してください。</p>
      <SourceCode>cat ＜ファイル名＞</SourceCode>
      
      <SubTitle subTitle="ファイルを作る　touch コマンド" />
      <p>ファイルを作るのもコマンドの方が早いです。</p>
      <SourceCode>touch ＜ファイル名＞</SourceCode>

      <SubTitle subTitle="フォルダを作る　mkdir コマンド" />
      <SourceCode>mkdir ＜フォルダ名＞</SourceCode>
      
      <SubTitle subTitle="フォルダ・ファイルを移動する　mv コマンド" />
      <p>GUIではエクスプローラーを複数開く必要があり手間がかかるため、コマンドを使った方が効率的です。</p>
      <SourceCode>mv ＜移動したいファイルまたはフォルダのパス＞ ＜移動先のディレクトリのパス＞</SourceCode>
      
      <SubTitle subTitle="フォルダ・ファイルを削除する　rm コマンド" />
      <h3>■ファイルを削除する</h3>
      <SourceCode>rm ＜ファイル名＞</SourceCode>
      <h3>■フォルダを削除する</h3>
      <SourceCode>rm -r ＜フォルダ名＞</SourceCode>
      
      <SubTitle subTitle="ファイルを編集する　vim コマンド" />
      <p>vimの編集は別で記事を書いているのでご覧ください。<ReadBtn url="VimForBeginner" /></p>
      <SourceCode>vim ＜ファイル名＞</SourceCode>
      
      <SubTitle subTitle="おわりに" />
      <p>
        最後まで読んでいただき、ありがとうございました。        
      </p>
      <p>
        筆者はdockerを使うためWSLでLinuxを使っているのですが、開発者にとってはやはり便利だなと感じます。
        Linuxを使いこなして、より効率的に開発を進めましょう♪
      </p>
    </ArticalPage>
  );
}