import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasBebidasBlancas extends BasePage {

    readonly BEBIDAS_BLANCAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BEBIDAS_BLANCAS = this.page.locator('//a [@id="menu-item-category-bebidas-blancas"]')
    }

    async clickBebidasBebidasBlancas(): Promise<void> {
        await this.click(this.BEBIDAS_BLANCAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasBebidasBlancas(): Promise<void> {
        await this.clickBebidasBebidasBlancas()
    }
}
