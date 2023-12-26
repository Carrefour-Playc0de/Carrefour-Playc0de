import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasVinosTintos extends BasePage {

    readonly VINOS_TINTOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.VINOS_TINTOS = this.page.locator('//a [@id="menu-item-category-vinos-tintos"]')
    }

    async clickBebidasVinosTintos(): Promise<void> {
        await this.click(this.VINOS_TINTOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasVinosTintos(): Promise<void> {
        await this.clickBebidasVinosTintos()
    }
}
