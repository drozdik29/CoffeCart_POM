import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;
     this.cartListLocator = page.getByRole('list').nth(1);
  }

  async open() {
    await this.page.goto('https://coffee-cart.app/cart');
  }

  async waitForLoading() {
    await this.page.waitForURL('https://coffee-cart.app/cart');
  }

  async getCartItemByName(coffeeName) {
    return this.cartListLocator.getByRole('listitem').filter({
      hasText: coffeeName,
    });
  }

async verifyCartItemName(coffeeName) {
    const cartItem = await this.getCartItemByName(coffeeName);
    const nameLocator = cartItem.locator('div').nth(0);
    await expect(nameLocator).toContainText(coffeeName);
  }

  async verifyCartItemUnitPrice(coffeeName, coffeUnitPrice) {
    const cartItem = await this.getCartItemByName(coffeeName);
    const unitLocator = cartItem.locator('div').nth(1);
    await expect(unitLocator).toContainText(`${coffeUnitPrice} x 1`);
  }

  async verifyCartItemTotalPrice(coffeeName, coffeTotalPrice) {
    const cartItem = await this.getCartItemByName(coffeeName);
    const totalCostLocator = cartItem.locator('div').nth(3);
    await expect(totalCostLocator).toContainText(coffeTotalPrice);
  }

  async getErrorMessage() {
    await expect(this.page.getByText('No coffee, go add some.')).toBeVisible();
  }

  async verifyCartItemIsHidden(coffeeName) {
    const cartItem = await this.getCartItemByName(coffeeName);
    await expect(cartItem).toBeHidden();
    await expect(cartItem).not.toBeVisible();
  }

  async verifyCartItemIsVisible(coffeeName) {
    const cartItem = await this.getCartItemByName(coffeeName);
    await expect(cartItem).toBeVisible();
  }

  async removeAllCoffeeFromCart(coffeeName) {
    const cartItem = await this.getCartItemByName(coffeeName);
    const removeButton = cartItem.getByRole('button', { name: `Remove all ${coffeeName}` });
    await removeButton.click();
  }

  async removeOneCoffeeFromCart(coffeeName) {
    const cartItem = await this.getCartItemByName(coffeeName);
    const removeButton = cartItem.getByRole('button', { name: `Remove one ${coffeeName}` });
    await removeButton.click();
  }

  async verifyTotalCost(totalCost) {
    await expect(this.page.getByTestId('checkout')).toContainText(`Total: ${totalCost}`);
  }

  async addOneCoffeeFromCart(coffeeName) {
    const cartItem = await this.getCartItemByName(coffeeName);
    const addButton = cartItem.getByRole('button', { name: `Add one ${coffeeName}` });
    await addButton.click();
  }
}
