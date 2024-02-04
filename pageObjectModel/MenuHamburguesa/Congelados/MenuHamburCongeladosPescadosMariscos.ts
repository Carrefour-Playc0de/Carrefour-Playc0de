import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburCongeladosPescadosMariscos extends BasePage {

    readonly PESCADOS_MARISCOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PESCADOS_MARISCOS = this.page.locator('//a [@id="menu-item-category-limpieza-baño"]');
    }

    async clickCongeladosPescadosMariscos(): Promise<void> {
        await this.click(this.PESCADOS_MARISCOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(5000)
    }

    async navigateToMenuHamburCongeladosPescadosMariscos(): Promise<void> {
        await this.clickCongeladosPescadosMariscos()
    }
}
