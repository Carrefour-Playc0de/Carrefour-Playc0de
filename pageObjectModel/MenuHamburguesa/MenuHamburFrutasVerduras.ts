import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuHamburFrutasVerduras extends BasePage {

    readonly FRUTAS_VERDURAS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FRUTAS_VERDURAS = this.page.locator('//div[contains(text(),\"Frutas y Verduras\")]')
    }

    async clickFrutasVerduras(): Promise<void> {
        await this.click(this.FRUTAS_VERDURAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        // await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburFrutasVerduras(): Promise<void> {
        await this.clickFrutasVerduras()
    }
}
