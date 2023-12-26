import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenPremezclasSaladas extends BasePage {

    readonly PREMEZCLAS_SALADAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PREMEZCLAS_SALADAS = this.page.locator('//a [@id="menu-item-category-premezclas-saladas"]')
    }

    async clickAlmacenPremezclasSaladas(): Promise<void> {
        await this.click(this.PREMEZCLAS_SALADAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPremezclasSaladas(): Promise<void> {
        await this.clickAlmacenPremezclasSaladas()
    }
}
