import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenSalsasAderezos extends BasePage {

    readonly SALSAS_ADEREZOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SALSAS_ADEREZOS = this.page.locator('//a [@id="menu-item-category-salsas-aderezos"]')
    }

    async clickAlmacenSalsasAderezos(): Promise<void> {
        await this.click(this.SALSAS_ADEREZOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenSalsasAderezos(): Promise<void> {
        await this.clickAlmacenSalsasAderezos()
    }
}
