import { expect } from '@playwright/test';

export class MenuPage {
  constructor(page) {
    this.page = page;

  }

  async open() {
    await this.page.goto('https://coffee-cart.app/');
  }

  async addCoffeeToCart(coffeeName) {
    await this.page.getByTestId(coffeeName).click();
  }

  async viewCart() {
    await this.page.getByLabel('Cart page').click();
  }

  async checkoutTotalContains(total) {
    await expect(this.page.getByTestId('checkout')).toContainText(`Total: ${total}`);
  }

  async hasCorrectCost(coffeeName, cost) {
    const coffeeCup = this.page.getByTestId(coffeeName);
    const parent = this.page.getByRole('listitem').filter({ has: coffeeCup });
    await expect(parent).toContainText(cost);
  }

  async mochaSpecialOfferAgree() {
    await expect(this.page.getByText("It's your lucky day! Get an extra cup of Mocha for $4.")).toBeVisible();
    await this.page.getByRole('button', { name: 'Yes, of course!' }).click();
  }

  async mochaSpecialOfferDecline() {
    await expect(this.page.getByText("It's your lucky day! Get an extra cup of Mocha for $4.")).toBeVisible();
    await this.page.getByRole('button', { name: 'Nah, I\'ll skip.' }).click();
  }
}
