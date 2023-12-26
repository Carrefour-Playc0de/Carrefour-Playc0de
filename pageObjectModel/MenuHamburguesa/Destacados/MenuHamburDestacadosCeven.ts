import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosCeven extends BasePage {

    readonly CEVEN: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CEVEN = this.page.locator('//div[contains(text(),\'Ceven\')]')
    }

    async clickDestacadosCeven(): Promise<void> {
        await this.click(this.CEVEN)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosCeven(): Promise<void> {
        await this.clickDestacadosCeven()
    }
}
