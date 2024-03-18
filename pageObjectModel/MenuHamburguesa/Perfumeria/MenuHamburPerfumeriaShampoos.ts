import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaShampoos extends BasePage {

    readonly SHAMPOOS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SHAMPOOS = this.page.locator('//a [@id="menu-item-category-shampoos"]')
    }

    async clickPerfumeriaShampoos(): Promise<void> {
        await this.click(this.SHAMPOOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaShampoos(): Promise<void> {
        await this.clickPerfumeriaShampoos()
    }
}
