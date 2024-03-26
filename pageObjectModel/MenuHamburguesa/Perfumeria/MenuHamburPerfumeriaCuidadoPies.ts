import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaCuidadoPies extends BasePage {

    readonly CUIDADO_PIES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CUIDADO_PIES = this.page.locator('//* [@id="menu-item-category-cuidado-pies"]')
    }

    async clickPerfumeriaCuidadoPies(): Promise<void> {
        await this.click(this.CUIDADO_PIES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaCuidadoPies(): Promise<void> {
        await this.clickPerfumeriaCuidadoPies()
    }
}
