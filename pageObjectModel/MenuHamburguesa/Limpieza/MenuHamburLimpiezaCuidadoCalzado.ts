import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaCuidadoCalzado extends BasePage {

    readonly CUIDADO_CALZADO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CUIDADO_CALZADO = this.page.locator('//a [@id="menu-item-category-cuidado-calzado"]')
    }

    async clickLimpiezaCuidadoCalzado(): Promise<void> {
        await this.click(this.CUIDADO_CALZADO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLimpiezaCuidadoCalzado(): Promise<void> {
        await this.clickLimpiezaCuidadoCalzado()
    }
}
