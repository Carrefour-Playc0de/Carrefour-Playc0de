import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosElectrolux extends BasePage {

    readonly ELECTROLUX: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ELECTROLUX = this.page.locator('//div[contains(text(),\'Electrolux\')]')
    }

    async clickDestacadosElectrolux(): Promise<void> {
        await this.click(this.ELECTROLUX)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosElectrolux(): Promise<void> {
        await this.clickDestacadosElectrolux()
    }
}
