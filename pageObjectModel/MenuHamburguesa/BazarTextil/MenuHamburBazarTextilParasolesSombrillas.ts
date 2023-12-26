import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilParasolesSombrillas extends BasePage {

    readonly PARASOLES_SOMBRILLAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PARASOLES_SOMBRILLAS = this.page.locator('//a [@id="menu-item-category-parasoles-sombrillas"]')
    }

    async clickBazarTextilParasolesSombrillas(): Promise<void> {
        await this.click(this.PARASOLES_SOMBRILLAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilParasolesSombrillas(): Promise<void> {
        await this.clickBazarTextilParasolesSombrillas()
    }
}
