import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosLeches extends BasePage {

    readonly LECHES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LECHES = this.page.locator('//a [@id="menu-item-category-leche"]')
    }

    async clickLacteosProdsFrescosLeches(): Promise<void> {
        await this.click(this.LECHES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosLeches(): Promise<void> {
        await this.clickLacteosProdsFrescosLeches()
    }
}
