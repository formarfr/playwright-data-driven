import { Page, Locator } from '@playwright/test';

export class Login {
    public readonly page: Page;
    private _usernameInput: Locator;
    private _passwordInput: Locator;
    private _signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this._usernameInput = page.getByLabel('Username');
        this._passwordInput = page.getByLabel('Password');
        this._signInButton = page.getByRole('button', { name: 'Sign in' });
    }

    async get() {
        await this.page.goto('/');
        return this;
    }

    async login(username: string, password: string): Promise<this> {
        await this._usernameInput.fill(username);
        await this._passwordInput.fill(password);
        await this._signInButton.click();
        return this;
    }
}
