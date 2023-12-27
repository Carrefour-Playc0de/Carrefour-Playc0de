import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuHamburDestacados extends BasePage {

    readonly DESTACADOS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DESTACADOS = this.page.getByText('Destacados')
    }

    async clickDestacados(): Promise<void> {
        await this.click(this.DESTACADOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        // await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburDestacados(): Promise<void> {
        await this.clickDestacados()
    }
}
