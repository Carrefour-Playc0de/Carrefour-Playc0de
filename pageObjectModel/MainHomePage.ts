import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from './commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../config/configLoader'

export class MainHomePage extends BasePage {

    readonly HOME_PAGE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HOME_PAGE = this.page.locator("//div[@class='vtex-store-header-2-x-headerRowContainer w-100 flex items-center']//img[@alt='Logo']")
    }

    async clickHomePageLogo(): Promise<void> {
        await this.click(this.HOME_PAGE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(15000)
    }

    async navigateToMainHomePagen(): Promise<void> {
        await this.clickHomePageLogo()
    }
}
