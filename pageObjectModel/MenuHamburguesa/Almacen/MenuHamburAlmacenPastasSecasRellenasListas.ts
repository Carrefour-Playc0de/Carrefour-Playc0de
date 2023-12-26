import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenPastasSecasRellenasListas extends BasePage {

    readonly PASTAS_SECAS_RELLENAS_LISTAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PASTAS_SECAS_RELLENAS_LISTAS = this.page.locator('//a [@id="menu-item-category-pastas-secas-rellenas"]')
    }

    async clickAlmacenPastasSecasRellenasListas(): Promise<void> {
        await this.click(this.PASTAS_SECAS_RELLENAS_LISTAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenPastasSecasRellenasListas(): Promise<void> {
        await this.clickAlmacenPastasSecasRellenasListas()
    }
}
