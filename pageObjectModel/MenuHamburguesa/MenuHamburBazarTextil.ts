import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuHamburBazarTextil extends BasePage {

    readonly BAZAR_TEXTIL: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BAZAR_TEXTIL = this.page.locator('//div[contains(text(),\"Bazar y textil\")]')
    }

    async clickBazarTextil(): Promise<void> {
        await this.click(this.BAZAR_TEXTIL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburBazarTextil(): Promise<void> {
        await this.clickBazarTextil()
    }
}
