import {page, Browser} from '@playwright/test'
/**
 * Base page class responsible to initialize the page for all the
 * child classes
 * 
 * @author Sachin
 */
class BasePage {
    constructor(page) {
      this.page = page;
    }
  
    async navigate(path) {
      await this.page.goto(path);
    }
  }
  
  export default BasePage;
  