import { FC } from "react"
import Markdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'


export const ArticalList: FC<{ title: string , fileName:string , explain:string }> = ({ title , fileName , explain }) => {
  let url = "/" + fileName
  return (
    <>
      <h3 className="sectionTitleLineDashed">
        {title}
        <a href={url} className="btnArticleLink">読む↗</a>
      </h3>
      <p>
        {explain}
      </p>
    </>
  );
}

export const ArticalListBox: FC<{ title: string , fileName:string , explain:string }> = ({ title , fileName , explain }) => {
  let url = "/" + fileName
  return (
    <>      
      <a href={url} className="articalBox">
        <h3>
          {title}
        </h3>
        <p>
          {explain}
        </p>        
      </a>
    </>
  );
}
// export const Head : FC<{title:string}> = ({title}) => {
//   return(
//     <>
//       <head>
//         <title>{title}</title>    
//         <script>
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-LG6VXEVGW8');
//         </script>
//         {/* <!-- Google tag (gtag.js) --> */}
//         <script async src="https://www.googletagmanager.com/gtag/js?id=G-LG6VXEVGW8"></script>
//         {/* <!-- Google AdSense --> */}
//         <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2761899560206236" crossorigin="anonymous"></script>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       </head>
//     </>
//   );
// }

export const HeaderNav: FC = () => {
  return(
    <>
      {/* <!-- ヘッダー高さ分の余白   --> */}
      <div className="header-box"></div>
      <header>
        <nav className="pc-menu">
          <ul className="header-ul">
            <li className="header-li"><a href="/" className="header-a">HOME</a></li>
            <li className="header-li"><a href="/ListTech" className="header-a">ARTICLE</a></li>
            <li className="header-li"><a href="/PlivacyPolicy" className="header-a">PRIVACY</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export const ReadBtn: FC<{ url: string , msg:string }> = ({ url , msg }) => {
  return(
    <a href={url} className="btnArticleLinkInText">{msg}↗</a>
  )
}

export const SubTitle: FC<{ subTitle: string }> = ({ subTitle }) => {
  return(
    
    <h2 className="sectionTitleLine">{subTitle}</h2>
  )
}

export const CodeBlock: FC<{ code: string }> = ({ code }) => {
  return(
    <pre><code className="codeBlock">
      {code}
    </code></pre>
  )
}

export const References: FC<{contens:string[][]}> = ({contens}) => {
  return(
    <>
      <h4>参考</h4>
      {contens.map((content) => (
          <>
          {content[0]} , <a href={content[1]}>{content[2]}</a><br />
          </>
        ))
      }
    </>
  );
}

export const LastUpdate: FC<{}> =() => {
  
  /* 更新日の取得 */
  const last = new Date(document.lastModified);
  const year = last.getFullYear();
  const month = last.getMonth() + 1;
  const date = last.getDate();

  const dateString :string =  year + '/' + month + '/' + date;
  return(
    <div className="right">
      🕓本記事の最終更新日は
      <time>{dateString}</time>
      です。
    </div>
  )
}

export type SourceCodeProps = {
  code: string;
  language?: string;
};
export const SourceCode:FC<SourceCodeProps> =({code, language='python'}) => {
  const markdown = `\`\`\`${language}
${code}
\`\`\``;
  return(
    <>
      <Markdown >
{markdown}
      </Markdown>
    </>
  );
}