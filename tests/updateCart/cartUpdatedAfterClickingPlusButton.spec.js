import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

test('Cart updated correctly after clicking plus for drinks', async ({
  page,
}) => {
  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);
  await menuPage.open();
  await menuPage.addCoffeeToCart('Cappuccino');
  await menuPage.addCoffeeToCart('Espresso');
  await menuPage.viewCart();
  await cartPage.waitForLoading();
  await cartPage.verifyCartItemTotalPrice('Espresso', '$10.00');
  await cartPage.addOneCoffeeFromCart('Espresso');
  await cartPage.verifyCartItemTotalPrice('Espresso', '$20.00');
  await cartPage.verifyCartItemTotalPrice('Cappuccino', '$19.00');
  await cartPage.addOneCoffeeFromCart('Cappuccino');
  await cartPage.verifyCartItemTotalPrice('Cappuccino', '$38.00');
  await cartPage.verifyCartItemTotalPrice('Espresso', '$20.00');
  await cartPage.verifyTotalCost('$58.00');
});
