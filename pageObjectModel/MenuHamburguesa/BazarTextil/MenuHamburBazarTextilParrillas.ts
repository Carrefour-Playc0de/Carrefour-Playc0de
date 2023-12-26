import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilParrillas extends BasePage {

    readonly PARRILLAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PARRILLAS = this.page.locator('//a [@id="menu-item-category-parrillas"]')
    }

    async clickBazarTextilParrillas(): Promise<void> {
        await this.click(this.PARRILLAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilParrillas(): Promise<void> {
        await this.clickBazarTextilParrillas()
    }
}
