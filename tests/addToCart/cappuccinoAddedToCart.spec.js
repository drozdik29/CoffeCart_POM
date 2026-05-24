import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

test('Cappuccino correctly added to the Cart', async ({ page }) => {
const menuPage = new MenuPage(page);
const cartPage = new CartPage(page);
await menuPage.open();
await menuPage.addCoffeeToCart('Cappuccino');
await menuPage.viewCart();
await cartPage.waitForLoading();
await cartPage.verifyCartItemName('Cappuccino');
await cartPage.verifyCartItemUnitPrice('Cappuccino', '$19.00');
await cartPage.verifyCartItemTotalPrice('Cappuccino', '$19.00');
});