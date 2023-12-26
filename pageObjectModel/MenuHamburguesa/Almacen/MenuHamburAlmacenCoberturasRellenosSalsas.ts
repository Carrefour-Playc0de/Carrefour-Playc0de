import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenCoberturasRellenosSalsas extends BasePage {

    readonly COBERTURAS_RELLENOS_SALSAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.COBERTURAS_RELLENOS_SALSAS = this.page.locator('//a [@id="menu-item-category-cobertura-relleno-salsas"]')

    }

    async clickAlmacenCoberturasRellenosSalsas(): Promise<void> {
        await this.click(this.COBERTURAS_RELLENOS_SALSAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenCoberturasRellenosSalsas(): Promise<void> {
        await this.clickAlmacenCoberturasRellenosSalsas()
    }
}
