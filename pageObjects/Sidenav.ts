import { Page, Locator } from '@playwright/test';

export class Sidenav {
    public readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navTo(link: string) {
        await this.page.getByRole('button').filter({ hasText: link }).click();
    }
}
