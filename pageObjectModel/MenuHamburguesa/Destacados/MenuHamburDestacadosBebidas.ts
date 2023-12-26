import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosBebidas extends BasePage {

    readonly BEBIDAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BEBIDAS = this.page.locator('//a [@id="menu-item-category-bebidas"]')
    }

    async clickDestacadosBebidas(): Promise<void> {
        await this.click(this.BEBIDAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosBebidas(): Promise<void> {
        await this.clickDestacadosBebidas()
    }
}
