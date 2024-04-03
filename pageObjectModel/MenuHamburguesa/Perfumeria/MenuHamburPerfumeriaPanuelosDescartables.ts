import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaPanuelosDescartables extends BasePage {

    readonly PANUELOS_DESCARTABLES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PANUELOS_DESCARTABLES = this.page.locator('//* [@id="menu-item-category-pañuelos-descartables"]')
    }

    async clickPerfumeriaPanuelosDescartables(): Promise<void> {
        await this.click(this.PANUELOS_DESCARTABLES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaPanuelosDescartables(): Promise<void> {
        await this.clickPerfumeriaPanuelosDescartables()
    }
}
