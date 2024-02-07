import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaDesodorantesAmbiente extends BasePage {

    readonly DESODORANTES_AMBIENTE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DESODORANTES_AMBIENTE = this.page.locator('//a [@id="menu-item-category-desodorante-ambiente"]')
    }

    async clickLimpiezaDesodorantesAmbiente(): Promise<void> {
        await this.click(this.DESODORANTES_AMBIENTE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLimpiezaDesodorantesAmbiente(): Promise<void> {
        await this.clickLimpiezaDesodorantesAmbiente()
    }
}
