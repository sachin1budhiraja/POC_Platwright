import { test, expect} from '@playwright/test';

import appUrl from '../../utils/appUrl.json';
import credentials from '../../utils/credentials.json';
import LoginPage from '../../pages/login.page';
import HomePage from '../../pages/home.page';
import TimesheetPage from '../../pages/timesheet.page';
import HelpDeskPage from '../../pages/helpdesk.page';


 test.beforeEach(async ({ page }) => {
   const loginPage = new LoginPage(page);
     await loginPage.navigate(appUrl.applications.app1); 
     await loginPage.login(credentials.username, credentials.password);
     await page.title();
     expect(await page.title()).toBe('PyramidCore Home Page.');
 });

  test('Verify TImesheet Page', async ({ page }) => {
     const homepage = new HomePage(page);
     await homepage.proceedToTimeSheetScreen();
     const timesheetPage = new TimesheetPage(page);
     const text = await timesheetPage.getText();
     expect(text).toBe('Copy from last week');
  });


  test('Verify Creating helpdesk ticket form', async ({ page, context }) => {
  const homepage = new HomePage(page);
   const [newPage] = await Promise.all([ context.waitForEvent('page'), homepage.proceedToHelpDeskPage()]);
   // This clicks the link that opens the new tab ]); 
   await newPage.waitForLoadState('networkidle');
   // Ensure the new tab is fully loaded await 
   const title = await newPage.title();
   const condition = title.includes('Helpdesk:: Dashboard')||title.includes('Log In');
   expect(condition).toBe(true);
   const helpDeskPage = new HelpDeskPage(newPage);
   const flag = await helpDeskPage.proceedToCreateTicketPage();
   expect(flag).toBe(true);
});

test.afterEach(async({page})=>{
   await page.close();
})


  
