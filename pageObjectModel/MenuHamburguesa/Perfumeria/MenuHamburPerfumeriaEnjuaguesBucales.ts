import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaEnjuaguesBucales extends BasePage {

    readonly ENJUAGUES_BUCALES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ENJUAGUES_BUCALES = this.page.locator('//a [@id="menu-item-category-enjuagues-bucales"]')
    }

    async clickPerfumeriaEnjuaguesBucales(): Promise<void> {
        await this.click(this.ENJUAGUES_BUCALES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaEnjuaguesBucales(): Promise<void> {
        await this.clickPerfumeriaEnjuaguesBucales()
    }
}
