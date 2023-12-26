import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from './commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../config/configLoader'

export class OnlyAcceptCookies extends BasePage {

    readonly ACCEPT_COOKIES_BUTTON: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ACCEPT_COOKIES_BUTTON = this.page.locator('//button [@id="onetrust-accept-btn-handler"]')
    }

    async clickOnlyButtonAcceptCookies(): Promise<void> {
        await this.click(this.ACCEPT_COOKIES_BUTTON)
        await this.page.waitForTimeout(3000)
    }

    async navigateToPageAndAcceptCookies(): Promise<void> {
        await this.clickOnlyButtonAcceptCookies()
    }
}
