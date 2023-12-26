import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MainPageAndAcceptCookies extends BasePage {

    readonly ACCEPT_COOKIES_BUTTON: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ACCEPT_COOKIES_BUTTON = this.page.locator('//button [@id="onetrust-accept-btn-handler"]')
    }

    async MainPage(): Promise<void> {
        await this.goto(this.env.baseURL)
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async acceptCookies(): Promise<void> {
        await this.click(this.ACCEPT_COOKIES_BUTTON)
        await this.page.waitForTimeout(3000)
    }

    async navigateToMainPageAndAcceptCookies(): Promise<void> {
        await this.MainPage()
        await this.acceptCookies()
    }
}
