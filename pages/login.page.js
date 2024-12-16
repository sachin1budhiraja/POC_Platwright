import BasePage from './base.page.js';
import credentials from '../utils/credentials.json' assert { type: 'json' };

/**
 * Class Responsible to Handle Login operations
 * 
 * @author Sachin
 */
class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;  // Ensure page is accessible in other methods
  }

  getUsernameInput() {
    return this.page.locator('input[id=pydLogin_txtUserid]'); // Update selector as per your application
  }

  getPasswordInput() {
    return this.page.locator('input[id=pydLogin_txtUserPwd]'); // Update selector as per your application
  }

  getLoginButton() {
    return this.page.locator('input[id=pydLogin_btnLogin]'); // Update selector as per your application
  }

  /**
   * function login into app
   * @param {*} username 
   * @param {*} password 
   * @author Sachin
   */
  async login(username, password) {
    await this.getUsernameInput().fill(username || credentials.username);
    await this.getPasswordInput().fill(password || credentials.password);
    await this.getLoginButton().click();
  }
}

export default LoginPage;
