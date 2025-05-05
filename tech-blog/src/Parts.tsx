import React, { FC } from "react";
import './style.css'

export const ArticalList: FC<{ title: string , fileName:string , explain:string }> = ({ title , fileName , explain }) => {
  let url = "./artical" + fileName
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

// export const Head : FC<{title:string}> = (title) => {
//   return(
//     <>
//       <head>
//         <title>{title}</title>
//         <link rel="icon" href="../素材/favicon.ico">
//         {/* <!-- Google tag (gtag.js) --> */}
//         <script async src="https://www.googletagmanager.com/gtag/js?id=G-LG6VXEVGW8"></script>
//         <script>
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());

//           gtag('config', 'G-LG6VXEVGW8');
//         </script>
//         {/* <!-- Google AdSense --> */}
//         <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2761899560206236" crossorigin="anonymous"></script>
        
//         <meta charset="UTF-8">
//         <link rel="stylesheet" href="../style.css">
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