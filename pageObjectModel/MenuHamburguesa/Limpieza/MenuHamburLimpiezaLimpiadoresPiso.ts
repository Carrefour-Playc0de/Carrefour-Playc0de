import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaLimpiadoresPiso extends BasePage {

    readonly LIMPIADORES_PISO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIMPIADORES_PISO = this.page.locator('//a [@id="menu-item-category-limpiadores-piso"]')
        // Limpiadores de Piso
    }

    async clickLimpiezaLimpiadoresPiso(): Promise<void> {
        await this.click(this.LIMPIADORES_PISO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLimpiezaLimpiadoresPiso(): Promise<void> {
        await this.clickLimpiezaLimpiadoresPiso()
    }
}
