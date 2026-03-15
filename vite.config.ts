import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePrerender from 'vite-plugin-prerender'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/',
        '/IndexEn',
        '/ListTech',
        '/ListAll',
        '/ListExperiences',
        '/ListExplanation',
        '/ListFistSeries',
        '/PlivacyPolicy',
        '/AwsForBeginner',
        '/AwsListOfServices',
        '/ElementOfComputer',
        '/FirstLTparty',
        '/GitForBeginner',
        '/GitForTeam',
        '/GoogleColab',
        '/Hakkason_1',
        '/Hakkason_2',
        '/Hakkason_3',
        '/HowToUseStreamlit',
        '/HTTPmethod',
        '/JavaSilver',
        '/JobHuntting',
        '/OracleBronzaDBA',
        '/Security',
        '/SimpleTest',
        '/TSkaigiReport',
        '/VimForBeginner',
        '/WhatIsProtocol',
        '/HowToMigrateBlog',
        '/FirstCareerChange',
        '/FirstLinux',
        '/FirstPcChange',
        '/HowToBootSurfaceByUSB',
        '/FirstCodeReview',
      ],
    }),
  ],
})