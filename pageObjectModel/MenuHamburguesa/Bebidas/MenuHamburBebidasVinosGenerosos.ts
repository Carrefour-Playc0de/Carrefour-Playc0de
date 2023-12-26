import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasVinosGenerosos extends BasePage {

    readonly VINOS_GENEROSOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.VINOS_GENEROSOS = this.page.locator('//a [@id="menu-item-category-vinos-generosos"]')
    }

    async clickBebidasVinosGenerosos(): Promise<void> {
        await this.click(this.VINOS_GENEROSOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasVinosGenerosos(): Promise<void> {
        await this.clickBebidasVinosGenerosos()
    }
}
