import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaTratamientosCapilares extends BasePage {

    readonly TRATAMIENTOS_CAPILARES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TRATAMIENTOS_CAPILARES = this.page.locator('//a [@id="menu-item-category-tratamientos-capilares"]')
    }

    async clickPerfumeriaTratamientosCapilares(): Promise<void> {
        await this.click(this.TRATAMIENTOS_CAPILARES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaTratamientosCapilares(): Promise<void> {
        await this.clickPerfumeriaTratamientosCapilares()
    }
}
