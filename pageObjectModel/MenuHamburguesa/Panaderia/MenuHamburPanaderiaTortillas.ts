import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPanaderiaTortillas extends BasePage {

    readonly TORTILLAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TORTILLAS = this.page.locator('//a [@id="menu-item-category-tortillas"]')
    }

    async clickPanaderiaTortillas(): Promise<void> {
        await this.click(this.TORTILLAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPanaderiaTortillas(): Promise<void> {
        await this.clickPanaderiaTortillas()
    }
}
