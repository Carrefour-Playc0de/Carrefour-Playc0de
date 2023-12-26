import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasVinosBlancos extends BasePage {

    readonly VINOS_BLANCOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.VINOS_BLANCOS = this.page.locator('//a [@id="menu-item-category-vinos-blancos"]')
    }

    async clickBebidasVinosBlancos(): Promise<void> {
        await this.click(this.VINOS_BLANCOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasVinosBlancos(): Promise<void> {
        await this.clickBebidasVinosBlancos()
    }
}
