import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosSinTACC extends BasePage {

    readonly SIN_TACC: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SIN_TACC = this.page.locator('//div[contains(text(),\'Sin TACC\')]')
    }

    async clickDestacadosSinTACC(): Promise<void> {
        await this.click(this.SIN_TACC)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosSinTACC(): Promise<void> {
        await this.clickDestacadosSinTACC()
    }
}
