import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuHamburCarnesPescados extends BasePage {

    readonly CARNES_PESCADOS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CARNES_PESCADOS = this.page.locator('//div[contains(text(),\"Carnes y Pescados\")]')
    }

    async clickCarnesPescados(): Promise<void> {
        await this.click(this.CARNES_PESCADOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburCarnesPescados(): Promise<void> {
        await this.clickCarnesPescados()
    }
}
