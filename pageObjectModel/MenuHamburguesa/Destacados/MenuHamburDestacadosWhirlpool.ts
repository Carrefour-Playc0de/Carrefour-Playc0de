import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosWhirlpool extends BasePage {

    readonly WHIRLPOOL: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.WHIRLPOOL = this.page.locator('//div[contains(text(),\'Whirlpool\')]')
    }

    async clickDestacadosWhirlpool(): Promise<void> {
        await this.click(this.WHIRLPOOL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosWhirlpool(): Promise<void> {
        await this.clickDestacadosWhirlpool()
    }
}
