import BasePage from "./base.page";

class CheckoutPage extends BasePage {
  get checkoutBtn() {
    return $("#checkout");
  }

  get firstName() {
    return $("#first-name");
  }

  get lastName() {
    return $("#last-name");
  }

  get postalCode() {
    return $("#postal-code");
  }

  get continueBtn() {
    return $("#continue");
  }

  get errorMessage() {
    return $('h3[data-test="error"]');
  }

  async startCheckout() {
    await this.waitAndClick(this.checkoutBtn);
  }

  async fillForm(first, last, zip) {
    await this.waitAndType(this.firstName, first);
    await this.waitAndType(this.lastName, last);
    await this.waitAndType(this.postalCode, zip);
  }

  async continue() {
    await this.waitAndClick(this.continueBtn);
  }

  async getErrorText() {
    await this.errorMessage.waitForDisplayed();
    return await this.errorMessage.getText();
  }
}

export default new CheckoutPage();
