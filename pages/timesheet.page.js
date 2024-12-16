import BasePage from './base.page.js';
/**
 * TimeSheet page Class
 * 
 * @author Sachin
 */
class TimesheetPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;  // Ensure page is accessible in other methods
  }
  async getTimeSheetCheckBoxText(){
    return this.page.locator('.//label[text()="Copy from last week"]').textContent();
  }

  /**
   * Returns the FrameElement of main frame
   * @returns Framelocator
   */
  async getFrameElement(){
    await this.page.waitForSelector('frame[name="main"]');   
    const frameElement  = await this.page.$('frame[name="main"]');
    return await frameElement.contentFrame();
  }

/**
 * Function locates the text and returns the text
 * @returns String
 */
  async getText(){
    const frame  = await this.getFrameElement();
    if(frame){
      await frame.waitForLoadState();
      const textContent = await frame.getByText('Copy from last week');
      return await textContent.textContent();
    }
    }
  
}

export default TimesheetPage;
