import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

test('Discounted Mocha added to the Cart after promo rejecting', async ({
  page,
}) => {
  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);  
  await menuPage.open();
  await menuPage.addCoffeeToCart('Cappuccino');
  await menuPage.addCoffeeToCart('Espresso');
  await menuPage.addCoffeeToCart('Americano');
  await menuPage.mochaSpecialOfferDecline();
  await menuPage.viewCart();
  await cartPage.waitForLoading();
  await cartPage.verifyCartItemIsVisible('Espresso');
  await cartPage.verifyCartItemIsHidden('(Discounted) Mocha');
  await cartPage.verifyCartItemIsVisible('Cappuccino');
  await cartPage.verifyCartItemIsVisible('Americano');

  // const cartLocator = page.getByRole('list').nth(1);
  // // Espresso
  // const espressoItem = cartLocator
  //   .getByRole('listitem')
  //   .filter({ hasText: 'Espresso' });
  // await expect(espressoItem).toBeVisible();

  // // (Discounted) Mocha
  // const mochaDiscountedItem = cartLocator
  //   .getByRole('listitem')
  //   .filter({ hasText: '(Discounted) Mocha' });
  // await expect(mochaDiscountedItem).toBeHidden();
  // await expect(mochaDiscountedItem).not.toBeVisible();

  // // Cappuccino
  // const cappuccinoItem = cartLocator
  //   .getByRole('listitem')
  //   .filter({ hasText: 'Cappuccino' });
  // await expect(cappuccinoItem).toBeVisible();

  // // Americano
  // const americanoItem = cartLocator
  //   .getByRole('listitem')
  //   .filter({ hasText: 'Americano' });
  // await expect(americanoItem).toBeVisible();
});
