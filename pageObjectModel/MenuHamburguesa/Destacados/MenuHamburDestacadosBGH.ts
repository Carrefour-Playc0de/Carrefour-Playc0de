import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosBGH extends BasePage {

    readonly BGH: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BGH = this.page.locator('//div[contains(text(),\'BGH\')]')
    }

    async clickDestacadosBGH(): Promise<void> {
        await this.click(this.BGH)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosBGH(): Promise<void> {
        await this.clickDestacadosBGH()
    }
}
