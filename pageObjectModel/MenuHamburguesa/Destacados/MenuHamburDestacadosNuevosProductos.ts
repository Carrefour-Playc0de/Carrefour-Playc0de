import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosNuevosProductos extends BasePage {

    readonly NUEVOS_PRODUCTOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.NUEVOS_PRODUCTOS = this.page.locator('//a [@id="menu-item-category-gracias-papas"]')
    }

    async clickDestacadosNuevosProductos(): Promise<void> {
        await this.click(this.NUEVOS_PRODUCTOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosNuevosProductos(): Promise<void> {
        await this.clickDestacadosNuevosProductos()
    }
}
