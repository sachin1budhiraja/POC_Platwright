import { log } from 'console';
import { Browser } from 'playwright';
import BasePage from './base.page.js';
/**
 * Home page class
 * 
 * house of all the menu options and frames
 * 
 * @author Sachin
 */
class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;  // Ensure page is accessible in other methods
  }

 
/**
 * Locates the frames and returns
 * @returns FrameLocator
 * @author Sachin
 */
  async getContentFrameElement() {
    await this.page.waitForSelector('frame[name="contents"]');
    const frameElement = await this.page.$('frame[name="contents"]');
    return await frameElement.contentFrame();
  }

  /**
   * Locates the Top frame and returns
   * @returns FrameLocator
   * @author Sachin
   */
  async getTopFrameElement() {
    await this.page.waitForSelector('frame[name="top"]');
    const frameElement = await this.page.$('frame[name="top"]');
    return await frameElement.contentFrame();
  }

/**
 * Proceed to timsheet Page
 * @author Sachin
 */
  async proceedToTimeSheetScreen() {
    const frame = await this.getContentFrameElement();
    if (frame) {
      await frame.waitForLoadState('networkidle');
      await frame.locator('#PCIMenut42').click();
      await frame.locator('#PCIMenut43').click();
    }
  }
/**
 * Proceeds to HelpDesk Page
 */
  async proceedToHelpDeskPage() {
    const frame = await this.getTopFrameElement();
    if (frame) {
      await frame.waitForLoadState();
      await frame.locator('a[id$="HelpDesk"]').click();
    }
  }


}


export default HomePage;
