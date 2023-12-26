import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosAlmacen extends BasePage {

    readonly ALMACEN: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ALMACEN = this.page.locator('//a [@id="menu-item-category-almacen"]')
    }

    async clickDestacadosAlmacen(): Promise<void> {
        await this.click(this.ALMACEN)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosAlmacen(): Promise<void> {
        await this.clickDestacadosAlmacen()
    }
}
