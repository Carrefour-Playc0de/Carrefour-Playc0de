import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilOtrosGeneros extends BasePage {

    readonly OTROS_GENEROS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.OTROS_GENEROS = this.page.locator('//div[contains(text(),\'Otros géneros\')]')
    }

    async clickBazarTextilOtrosGeneros(): Promise<void> {
        await this.click(this.OTROS_GENEROS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilOtrosGeneros(): Promise<void> {
        await this.clickBazarTextilOtrosGeneros()
    }
}
