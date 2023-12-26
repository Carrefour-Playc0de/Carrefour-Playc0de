import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenPremezclasDulces extends BasePage {

    readonly PREMEZCLAS_DULCES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PREMEZCLAS_DULCES = this.page.locator('//a [@id="menu-item-category-premezclas-dulces-reposteria"]')
    }

    async clickAlmacenPremezclasDulces(): Promise<void> {
        await this.click(this.PREMEZCLAS_DULCES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenPremezclasDulces(): Promise<void> {
        await this.clickAlmacenPremezclasDulces()
    }
}
