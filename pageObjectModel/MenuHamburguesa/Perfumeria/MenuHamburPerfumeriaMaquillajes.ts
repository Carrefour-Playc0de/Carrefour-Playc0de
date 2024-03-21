import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaMaquillajes extends BasePage {

    readonly MAQUILLAJES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MAQUILLAJES = this.page.locator('//* [@id="menu-item-category-maquillajes"]')
        // Maquillajes
    }

    async clickPerfumeriaMaquillajes(): Promise<void> {
        await this.click(this.MAQUILLAJES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaMaquillajes(): Promise<void> {
        await this.clickPerfumeriaMaquillajes()
    }
}
