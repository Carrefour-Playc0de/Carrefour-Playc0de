import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosVersusGaming extends BasePage {

    readonly VERSUS_GAMING: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.VERSUS_GAMING = this.page.locator('//div[contains(text(),\'Versus gaming\')]')
    }

    async clickDestacadosVersusGaming(): Promise<void> {
        await this.click(this.VERSUS_GAMING)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosVersusGaming(): Promise<void> {
        await this.clickDestacadosVersusGaming()
    }
}
