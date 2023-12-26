import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburFrutasVerdurasFrutosSecos extends BasePage {

    readonly FRUTOS_SECOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FRUTOS_SECOS = this.page.locator('//a [@id="menu-item-category-frutos-secos"]')
    }

    async clickFrutasVerdurasFrutosSecos(): Promise<void> {
        await this.click(this.FRUTOS_SECOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburFrutasVerdurasFrutosSecos(): Promise<void> {
        await this.clickFrutasVerdurasFrutosSecos()
    }
}
