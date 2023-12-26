import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosProductosCarrefour extends BasePage {

    readonly PRODUCTOS_CARREFOUR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PRODUCTOS_CARREFOUR = this.page.locator('//a [@id="menu-item-category-productos-carrefour"]')
    }

    async clickDestacadosProductosCarrefour(): Promise<void> {
        await this.click(this.PRODUCTOS_CARREFOUR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosProductosCarrefour(): Promise<void> {
        await this.clickDestacadosProductosCarrefour()
    }
}
