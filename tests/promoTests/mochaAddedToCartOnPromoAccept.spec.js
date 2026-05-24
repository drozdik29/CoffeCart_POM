import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

test('Discounted Mocha added to the Cart after promo accepting', async ({
  page,
}) => {
  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);

  await menuPage.open();
  await menuPage.addCoffeeToCart('Cappuccino');
  await menuPage.addCoffeeToCart('Espresso');
  await menuPage.addCoffeeToCart('Americano');
  await menuPage.mochaSpecialOfferAgree();
  await menuPage.viewCart();
  await cartPage.waitForLoading();

  await cartPage.getCartItemByName('Espresso');
  await cartPage.verifyCartItemName('Espresso');
  await cartPage.verifyCartItemUnitPrice('Espresso', '$10.00');
  await cartPage.verifyCartItemTotalPrice('Espresso', '$10.00');

  await cartPage.verifyCartItemName('(Discounted) Mocha');
  await cartPage.verifyCartItemUnitPrice('(Discounted) Mocha', '$4.00');
  await cartPage.verifyCartItemTotalPrice('(Discounted) Mocha', '$4.00');

  await cartPage.verifyCartItemName('Cappuccino');
  await cartPage.verifyCartItemUnitPrice('Cappuccino', '$19.00');
  await cartPage.verifyCartItemTotalPrice('Cappuccino', '$19.00');

  await cartPage.verifyCartItemName('Americano');
  await cartPage.verifyCartItemUnitPrice('Americano', '$7.00');
  await cartPage.verifyCartItemTotalPrice('Americano', '$7.00');
});

  // const cartLocator = page.getByRole('list').nth(1);
  // // Espresso
  // const espressoItem = cartLocator
  //   .getByRole('listitem')
  //   .filter({ hasText: 'Espresso' });
  // const espressoTotalCost = espressoItem.locator('div').nth(3);

  // await expect(espressoTotalCost).toContainText('$10.00');

  // // (Discounted) Mocha
  // const mochaDiscountedItem = cartLocator
  //   .getByRole('listitem')
  //   .filter({ hasText: '(Discounted) Mocha' });
  // const mochaDiscountedTotalCost = mochaDiscountedItem.locator('div').nth(3);

  // await expect(mochaDiscountedTotalCost).toContainText('$4.00');

  // // Cappuccino
  // const cappuccinoItem = cartLocator
  //   .getByRole('listitem')
  //   .filter({ hasText: 'Cappuccino' });
  // const cappuccinoTotalCost = cappuccinoItem.locator('div').nth(3);

  // await expect(cappuccinoTotalCost).toContainText('$19.00');

  // // Americano
  // const americanoItem = cartLocator
  //   .getByRole('listitem')
  //   .filter({ hasText: 'Americano' });
  // const americanoTotalCost = americanoItem.locator('div').nth(3);

  // await expect(americanoTotalCost).toContainText('$7.00');

