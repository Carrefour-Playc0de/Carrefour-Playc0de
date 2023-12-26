import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburCarnesPescadosPescadosMariscos extends BasePage {

    readonly PESCADOS_MARISCOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PESCADOS_MARISCOS = this.page.locator('//a [@id="menu-item-category-pescados-mariscos"]')
    }

    async clickCarnesPescadosPescadosMariscos(): Promise<void> {
        await this.click(this.PESCADOS_MARISCOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburCarnesPescadosPescadosMariscos(): Promise<void> {
        await this.clickCarnesPescadosPescadosMariscos()
    }
}
