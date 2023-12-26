import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosDecohogar extends BasePage {

    readonly DECOHOGAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DECOHOGAR = this.page.locator('//div[contains(text(),\'Decohogar\')]')
    }

    async clickDestacadosDecohogar(): Promise<void> {
        await this.click(this.DECOHOGAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosDecohogar(): Promise<void> {
        await this.clickDestacadosDecohogar()
    }
}
