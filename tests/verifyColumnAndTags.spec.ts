import { test, expect } from '@playwright/test';
import { TestData } from '../Data/TestData';
import { Login } from '../pageObjects/Login';
import { LoginConstants } from '../constants/loginConstants';
import { Board } from '../pageObjects/Board';
import { Sidenav } from '../pageObjects/Sidenav';
import _ from 'lodash';
import 'dotenv/config'

const testData = new TestData();
const scenarios = testData.scenarios;

scenarios.forEach(({ link, card, expectedColumn, expectedTags }) => {
  
  test.describe(`Demo App | ${link}`, () => {

      test(`Verify '${card}' is in '${expectedColumn}' column`, async ({ page }) => {
        const loginPage = new Login(page);
        const loginPageConstants = new LoginConstants();
        const sidenav = new Sidenav(page);
        const boardPage = new Board(page);
        
        // User is authenticated if auth.setup.ts has been run and auth not expired
        await loginPage.get();
        expect(await page.title()).toBe(loginPageConstants.pageTitle);

        await sidenav.navTo(link);

        // Verify the card is in the expected board column
        const columnCards = await boardPage.getCardHeadingByColumn(expectedColumn);
        expect(columnCards).toContain(card);
        
        // Verify each tag on the card is expected
        const tags = await boardPage.getTagsByCardHeading(card);
        tags.forEach(tg => { expect(expectedTags.indexOf(tg)).toBeGreaterThan(-1); });
      });
    });
});
