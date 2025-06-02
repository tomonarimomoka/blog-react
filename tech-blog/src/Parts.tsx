import { FC , ReactNode } from "react"
import Markdown from 'react-markdown'
import { Helmet } from 'react-helmet';
import "./style.css"

export const ArticleCard: FC<{ title: string , fileName:string , children:string }> = ({ title , fileName , children }) => {
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

export const ReadBtn: FC<{ url: string , msg?:string }> = ({ url , msg="読む" }) => {
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

export const SourceCode:FC<{children:string ,language?: string}> =({children, language='python'}) => {
  const  markdown = `\`\`\`${language}
${children}
\`\`\``;
  return(
    <>
    <div className="codeBlock">
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LG6VXEVGW8');
            `,
          }}
        />
        {/* <!-- Google AdSense --> */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2761899560206236" crossOrigin="anonymous"></script>
      </Helmet> 
      <h1 id="articleTitle">{title}</h1>
      <LastUpdate/>
      {children}
    </>
  )
}
export const FlexBox:FC<{children:ReactNode}> = ({children}) => {

  return(
    <div className="flexBox">
      {children}
    </div>
  )
}
export const Img_10:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_10" alt={alt} />
    </>
  )
}
export const Img_20:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_20" alt={alt} />
    </>
  )
}
export const Img_30:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_30" alt={alt} />
    </>
  )
}
export const Img_40:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_40" alt={alt} />
    </>
  )
}
export const Img_50:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_50" alt={alt} />
    </>
  )
}
export const Img_60:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_60" alt={alt} />
    </>
  )
}
export const Img_70:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_70" alt={alt} />
    </>
  )
}
export const Img_80:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_80" alt={alt} />
    </>
  )
}
export const Img_90:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_90" alt={alt} />
    </>
  )
}
export const Img_100:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_100" alt={alt} />
    </>
  )
}
import React, { useState } from "react";
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
    <div className="header-box"></div>
    <header className="header">
      <div className="header-inner">
        <HomeLink />
        <h1 className="site-title">かわいいてっくももか</h1>
        <button className="menu-button" onClick={toggleMenu} aria-label="メニューを開く">
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <nav className="menu">
          <a href="/" className="header-a">HOME</a>
          <a href="/ListTech" className="header-a">ARTICLE</a>
          <a href="/PlivacyPolicy" className="header-a">PRIVACY</a>
        </nav>
      )}
    </header>
    </>
  );
};
export const HomeLink: React.FC = () => {
  return (
    <a href="/" >
      <img
        src="favicon.ico" 
      />
    </a>
  );
};