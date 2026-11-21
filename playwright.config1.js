// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { on } from 'node:cluster';

/** 
 @see https://playwright.dev/docs/test-configuration
 */


export default defineConfig( {
  testDir : './tests', testMatch: '**/*.spec.js',
  timeout : 50*1000,
  workers:3,
  expect : {
    timeout : 5000,
  },
  reporter : 'html',
  projects : [
    {
      name : 'safari',
     use: {
    browserName :  'webkit' ,
    headless:true,
    screenshot :'only-on-failure',
    trace :'on'
   
  },
 },
   {
    name: 'chrome',
    use: {
    browserName :  'chromium' ,
    headless:false,
    screenshot :'only-on-failure',
    trace :'on',
    
   
  },

  
   }


  ]

  
});

