// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { on } from 'node:cluster';

/** 
 @see https://playwright.dev/docs/test-configuration
 */


export default defineConfig( {
  testDir : './tests', testMatch: '**/*.spec.{js,ts}',
  timeout : 50*1000,
  workers: 2 ,
  expect : {
    timeout : 5000,
  },
  reporter : 'html',
  

  use: {
    browserName :  'chromium' ,
    headless:false,
    screenshot :'only-on-failure',
    trace :'on'
   
  },

  
});

