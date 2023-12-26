import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasVodka extends BasePage {

    readonly VODKA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.VODKA = this.page.locator('//a [@id="menu-item-category-vodka"]')
    }

    async clickBebidasVodka(): Promise<void> {
        await this.click(this.VODKA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasVodka(): Promise<void> {
        await this.clickBebidasVodka()
    }
}
