import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburguesaBazarTextilMuebles extends BasePage {

    readonly MUEBLES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MUEBLES = this.page.locator('//a [@id="menu-item-category-muebles"]')
    }

    async clickBazarTextilMuebles(): Promise<void> {
        await this.click(this.MUEBLES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilMuebles(): Promise<void> {
        await this.clickBazarTextilMuebles()
    }
}
