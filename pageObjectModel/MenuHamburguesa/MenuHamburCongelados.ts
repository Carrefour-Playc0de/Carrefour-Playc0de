import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuHamburCongelados extends BasePage {

    readonly CONGELADOS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CONGELADOS = this.page.locator('//div[contains(text(),\"Congelados\")]')
    }

    async clickCongelados(): Promise<void> {
        await this.click(this.CONGELADOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        // await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburCongelados(): Promise<void> {
        await this.clickCongelados()
    }
}
