import { log } from 'console';
import BasePage from './base.page.js';
/**
 * Help Desk page class 
 * 
 * @author Sachin
 */
class HelpDeskPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;  // Ensure page is accessible in other methods
    }


    /**
     * method proceed to ticket creation page
     * @returns boolean
     * @author Sachin
     */
    async proceedToCreateTicketPage() {
        const createTicketShift = await this.page.getByText('Create Ticket').first();
        await createTicketShift.click();
        const createTicketElement = await this.page.locator('//a[text()="Create Ticket"]');
        await createTicketElement.click();
        await this.page.waitForLoadState('networkidle');
        const elementVisi = await this.page.getByRole('button', { name: 'Create' });
        return await elementVisi.isVisible();
    }

}
export default HelpDeskPage;
