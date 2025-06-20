import { FC } from "react";
import {ArticalPage , SubTitle , ReadBtn , CustomTable , Img_30} from './Parts';

export const IndexEn: FC = () => {
  return(
    <ArticalPage title="💗Welcome！kawaii tech momoka💗">
      <ReadBtn msg="日本語" url="/" />
      <SubTitle subTitle="♥About this blog" />
      <p>
        This is a blog for engineers.
      </p>
      <p>
        I write blog posts as an engineer.
        I hope my blog will be useful for other engineers.
        I will write not only commentary but also experiences.
      </p>
      <p>
         I hope to contribute to Japan's technological strength by increasing the number of technical articles in Japanese.
      </p>
      <SubTitle subTitle="My recommend" />
      <p>There are currently only blog posts in Japanese😢 I would like to post English articles in the future💗</p>
      <ul>
        <li>Black-box testing techniques<ReadBtn url="/SimpleTest" /></li>
        <li>How even a one-year-delayed junior college student can land a job at a white company<ReadBtn url="/JobHuntting" /></li>
        <li>【Generative AI】Hackathon participation report vol.1<ReadBtn url="/Hakkason_1" /></li>
        <li>【Presentation】LT (Lightning Talk) participation report<ReadBtn url="/FirstLTparty" /></li>
      </ul>
      <SubTitle subTitle="History of this site 'kawaii tech momoka'" />
      <CustomTable>
        <tr><th>When</th><th>What happened</th></tr>
        <tr><td>2023.10</td><td>Launched "kawaii tech momoka"!</td></tr>
        <tr><td>2024.7</td><td>10 blog posts</td></tr>
        <tr><td>2025.4</td><td>20 blog posts</td></tr>
        <tr><td>2025.5</td><td>Migrated system to TypeScript × React<ReadBtn url="/HowToMigrateBlog" /></td></tr>
      </CustomTable>
      <SubTitle subTitle="♥About the Author" />

      <h3>■Self Introduction</h3>
      <p>
        I am a software engineer. I like programming.    
      </p>
      <p>
        I used to be a programmer.
        Now , I study IT knowledge other than programming because software engineers need extensive knowledge.
      </p>
      <p>        
        My motto is "行動せざる者、願うべからず". 
        It means 'When you want something, you must take action'.
        This is a proverb I made up.
      </p>
      <h3>■Career</h3>
      <p>
        If you want to know my journey to becoming an engineer, you should read<ReadBtn msg="my job hunting" url="/jobHuntting" />
      </p>
      <p>
        I recently changed jobs.
        For details about my career change, please see <ReadBtn msg="my first career change" url="/FirstCareerChange" />.
      </p>
      <h3>■Qualifications and Exams</h3>
      <ul>
        <li>ITパスポート試験</li>
        <li>Oracle Certified Java Programmer, Silver SE11（aka:Java Silver）</li>
        <li>Bronze DBA Oracle Database Fundamentals（aka:Oracle Master Bronze）</li>
        <li>基本情報技術者試験</li>
        <li>生成AIパスポート試験</li>
        <li>University of Tokyo, Matsuo & Iwasawa Lab - Large Language Models Course (2024)</li>
      </ul>
      <Img_30 path="./assets/SILVSE11JPN.jpg" alt="認定バッチ"/>
      <Img_30 path="./assets/BRZDBA19CJPN.jpg" alt="認定バッチ" />
      <Img_30 path="./assets/generative-ai-passport-logo.png" alt="認定バッチ" />
    </ArticalPage>
  );
}