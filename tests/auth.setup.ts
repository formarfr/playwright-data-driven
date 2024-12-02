import { test as setup, expect } from '@playwright/test';
import { LoginConstants } from '../constants/loginConstants';
import { Board } from '../pageObjects/Board';
import { Login } from '../pageObjects/Login';
import { Sidenav } from '../pageObjects/Sidenav';
import { TestData } from '../Data/TestData';
import 'dotenv/config'
import path from 'path';

const authFile = path.join(__dirname, '../.auth/user.json');
const testData = new TestData();

setup('authenticate', async ({ page }) => {
    const loginPage = new Login(page);
    const loginPageConstants = new LoginConstants();
    const boardPage = new Board(page);

    await loginPage.get();
    expect(await page.title()).toBe(loginPageConstants.pageTitle);

    await loginPage.login(testData.username, testData.password);
    expect((await boardPage.columnHeadersText()).length).toBeGreaterThan(0);

    await page.context().storageState({ path: authFile });
});