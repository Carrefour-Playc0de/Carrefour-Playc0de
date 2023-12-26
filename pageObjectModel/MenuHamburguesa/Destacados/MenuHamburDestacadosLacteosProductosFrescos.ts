import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosLacteosProductosFrescos extends BasePage {

    readonly LACTEOS_PRODUCTOS_FRESCOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LACTEOS_PRODUCTOS_FRESCOS = this.page.locator('//a [@id="menu-item-category-lacteos-productos-frescos"]')
    }

    async clickDestacadosLacteosProductosFrescos(): Promise<void> {
        await this.click(this.LACTEOS_PRODUCTOS_FRESCOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosLacteosProductosFrescos(): Promise<void> {
        await this.clickDestacadosLacteosProductosFrescos()
    }
}
