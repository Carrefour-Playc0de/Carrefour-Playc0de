import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasBebidasEnergizantes extends BasePage {

    readonly BEBIDAS_ENERGIZANTES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BEBIDAS_ENERGIZANTES = this.page.locator('//a [@id="menu-item-category-bebidas-energizantes"]')
    }

    async clickBebidasBebidasEnergizantes(): Promise<void> {
        await this.click(this.BEBIDAS_ENERGIZANTES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasBebidasEnergizantes(): Promise<void> {
        await this.clickBebidasBebidasEnergizantes()
    }
}
