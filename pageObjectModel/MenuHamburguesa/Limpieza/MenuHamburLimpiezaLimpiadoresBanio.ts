import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaLimpiadoresBanio extends BasePage {

    readonly LIMPIADORES_BANIO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIMPIADORES_BANIO = this.page.locator('//a [@id="menu-item-category-limpiadores-baño"]')
        // Limpiadores de Banio
    }

    async clickLimpiezaLimpiadoresBanio(): Promise<void> {
        await this.click(this.LIMPIADORES_BANIO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLimpiezaLimpiadoresBanio(): Promise<void> {
        await this.clickLimpiezaLimpiadoresBanio()
    }
}