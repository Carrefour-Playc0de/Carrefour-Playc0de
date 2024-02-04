import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburCongeladosPapas extends BasePage {

    readonly PAPAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PAPAS = this.page.locator('//a [@id="menu-item-category-insecticidas"]');
    }

    async clickCongeladosPapas(): Promise<void> {
        await this.click(this.PAPAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(5000)
    }

    async navigateToMenuHamburCongeladosPapas(): Promise<void> {
        await this.clickCongeladosPapas()
    }
}
