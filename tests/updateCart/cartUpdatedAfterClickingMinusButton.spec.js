import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

test('Cart updated correctly after clicking minus for drinks', async ({
  page,
}) => {

  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);
  await menuPage.open();  
  await menuPage.addCoffeeToCart('Cappuccino');
  await menuPage.addCoffeeToCart('Espresso');
  await menuPage.viewCart();
  await cartPage.waitForLoading();

await cartPage.verifyCartItemIsVisible('Espresso');
await cartPage.removeOneCoffeeFromCart('Espresso');
await cartPage.verifyCartItemIsHidden('Espresso');
await cartPage.verifyCartItemIsVisible('Cappuccino');
await cartPage.removeOneCoffeeFromCart('Cappuccino');
await cartPage.verifyCartItemIsHidden('Cappuccino');
await cartPage.getErrorMessage();
});
