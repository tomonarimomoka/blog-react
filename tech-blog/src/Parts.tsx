import { FC , ReactNode } from "react"
import Markdown from 'react-markdown'
import { Helmet } from 'react-helmet';

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

export const ArticalListBox: FC<{ title: string , fileName:string , children:ReactNode }> = ({ title , fileName , children }) => {
  let url = "/" + fileName
  return (
    <>      
      <a href={url} className="articalBox">
        <h3>
          {title}
        </h3>
        <p>
          {children}
        </p>        
      </a>
    </>
  );
}
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

export const References_link: FC<{author?:string , lastUpdate?:string , url:string , articleTitle:string}> = ({author , lastUpdate , url , articleTitle}) => {
  return(
    <>
      {author && author} {author && " , "} {lastUpdate && lastUpdate}  {lastUpdate && " , "} <a href={url}>{articleTitle}</a><br />
    </>
  );
}

export const References_book: FC<{author:string , lastUpdate?:string , bookTitle:string , chapter?:string}> = ({author , lastUpdate , chapter , bookTitle}) => {
  return(
    <>
      {author} , {bookTitle}{ chapter && "．"}{chapter && `${chapter}`} , {lastUpdate && `${lastUpdate}`}  <br />
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

export const SourceCode:FC<{children:ReactNode ,language?: string}> =({children, language='python'}) => {
  const markdown = `\`\`\`${language}
${children}
\`\`\``;
  return(
    <>
    <div className="codeBlock">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
      <Markdown >
{markdown}
      </Markdown>

    </div>
    </>
  );
}

export const CustomTable:FC<{children:ReactNode , cap?:string}> = ({children , cap}) => {
  return(
    <>      
      <table>
        {cap&&<caption>{cap}</caption>}
        <tbody>
          {children}
        </tbody>
      </table>
    </>
  )
}

export const ArticalPage:FC<{title:string , children:ReactNode}> = ({title , children}) => {
  return(
    <>
      <Helmet>
        <title>{title}</title>
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LG6VXEVGW8"></script>
        {/* <!-- Google AdSense --> */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2761899560206236" crossOrigin="anonymous"></script>
      </Helmet>
      <h1 id="articleTitle">{title}</h1>
      <LastUpdate/>
      {children}
    </>
  )
}