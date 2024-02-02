import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburCongeladosHeladosPostres extends BasePage {

    readonly HELADOS_POSTRES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HELADOS_POSTRES = this.page.locator('//a [@id="menu-item-category-lecrollos-cocina-servilletashe"]');
    }

    async clickCongeladosHeladosPostres(): Promise<void> {
        await this.click(this.HELADOS_POSTRES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburCongeladosHeladosPostres(): Promise<void> {
        await this.clickCongeladosHeladosPostres()
    }
}
