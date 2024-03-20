import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaPastaDental extends BasePage {

    readonly PASTA_DENTAL: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PASTA_DENTAL = this.page.locator('//a [@id="menu-item-category-pasta-dental"]')
    }

    async clickPerfumeriaPastaDental(): Promise<void> {
        await this.click(this.PASTA_DENTAL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaPastaDental(): Promise<void> {
        await this.clickPerfumeriaPastaDental()
    }
}
