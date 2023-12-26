import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosElectro extends BasePage {

    readonly ELECTRO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ELECTRO = this.page.locator('//a [@id="menu-item-category-sin-sal-bajo-sodio"]')
    }

    async clickDestacadosElectro(): Promise<void> {
        await this.click(this.ELECTRO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosElectro(): Promise<void> {
        await this.clickDestacadosElectro()
    }
}
