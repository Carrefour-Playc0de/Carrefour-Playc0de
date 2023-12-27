import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuHamburIndumentaria extends BasePage {

    readonly INDUMENTARIA: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.INDUMENTARIA = this.page.locator('//div[contains(text(),\'Indumentaria\')]')
    }

    async clickIndumentaria(): Promise<void> {
        await this.click(this.INDUMENTARIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        // await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburIndumentaria(): Promise<void> {
        await this.clickIndumentaria()
    }
}
