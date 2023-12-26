import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosPostres extends BasePage {

    readonly POSTRES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.POSTRES = this.page.locator('//a [@id="menu-item-category-postres"]')
    }

    async clickLacteosProdsFrescosPostres(): Promise<void> {
        await this.click(this.POSTRES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosPostres(): Promise<void> {
        await this.clickLacteosProdsFrescosPostres()
    }
}
