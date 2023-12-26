import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosBangho extends BasePage {

    readonly BANGHO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BANGHO = this.page.locator('//div[contains(text(),\'Banghó\')]')
    }

    async clickDestacadosBangho(): Promise<void> {
        await this.click(this.BANGHO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosBangho(): Promise<void> {
        await this.clickDestacadosBangho()
    }
}
