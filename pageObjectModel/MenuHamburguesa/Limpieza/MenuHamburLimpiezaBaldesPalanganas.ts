import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaBaldesPalanganas extends BasePage {

    readonly BALDES_PALANGANAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BALDES_PALANGANAS = this.page.locator('//a [@id="menu-item-category-baldes-palanganas"]')
    }

    async clickLimpiezaBaldesPalanganas(): Promise<void> {
        await this.click(this.BALDES_PALANGANAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(7000)
    }

    async navigateToMenuHamburLimpiezaBaldesPalanganas(): Promise<void> {
        await this.clickLimpiezaBaldesPalanganas()
    }
}
