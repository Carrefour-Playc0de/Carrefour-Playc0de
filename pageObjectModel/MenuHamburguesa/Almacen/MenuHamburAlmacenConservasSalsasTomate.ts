import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenConservasSalsasTomate extends BasePage {

    readonly CONSERVAS_SALSAS_TOMATE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CONSERVAS_SALSAS_TOMATE = this.page.locator('//a [@id="menu-item-category-conservas-salsas-tomate"]')
    }

    async clickAlmacenConservasSalsasTomate(): Promise<void> {
        await this.click(this.CONSERVAS_SALSAS_TOMATE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenConservasSalsasTomate(): Promise<void> {
        await this.clickAlmacenConservasSalsasTomate()
    }
}
