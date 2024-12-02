import { Page, Locator } from '@playwright/test';

export class Board {
    public readonly page: Page;
    private readonly _taskboard: Locator;
    private readonly _card: Locator;

    constructor(page: Page) {
        this.page = page;
        this._taskboard = page.locator('div.h-full div div');
        this._card = page.locator('div.bg-white.p-4');
    }

    async columnHeadersText(): Promise<string[]> {
        await this.page.waitForSelector(this._taskboard['_selector']);
        return await this._taskboard
            .locator('h2')
            .allInnerTexts();
    }

    async getCardHeadingByColumn(column: string): Promise<string[]> {
        return await this._taskboard
            .filter({hasText: column})
            .locator('h3')
            .allInnerTexts();
    }

    async getTagsByCardHeading(cardHeading: string): Promise<string[]> {
        return await this._card
            .filter({hasText: cardHeading})
            .locator('span.rounded-full')
            .allInnerTexts();
    }
}
