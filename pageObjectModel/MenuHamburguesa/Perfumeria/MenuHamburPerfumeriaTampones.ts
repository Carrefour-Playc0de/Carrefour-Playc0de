import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaTampones extends BasePage {

    readonly TAMPONES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TAMPONES = this.page.locator('//* [@id="menu-item-category-tampones"]')
    }

    async clickPerfumeriaTampones(): Promise<void> {
        await this.click(this.TAMPONES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaTampones(): Promise<void> {
        await this.clickPerfumeriaTampones()
    }
}
