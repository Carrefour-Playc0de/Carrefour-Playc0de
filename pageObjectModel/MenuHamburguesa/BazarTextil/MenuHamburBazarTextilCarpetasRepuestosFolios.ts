import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilCarpetasRepuestosFolios extends BasePage {

    readonly CARPETAS_REPUESTOS_FOLIOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CARPETAS_REPUESTOS_FOLIOS = this.page.locator('//a [@id="menu-item-category-carpetas-repuestos-folios"]')
    }

    async clickBazarTextilCarpetasRepuestosFolios(): Promise<void> {
        await this.click(this.CARPETAS_REPUESTOS_FOLIOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilCarpetasRepuestosFolios(): Promise<void> {
        await this.clickBazarTextilCarpetasRepuestosFolios()
    }
}
