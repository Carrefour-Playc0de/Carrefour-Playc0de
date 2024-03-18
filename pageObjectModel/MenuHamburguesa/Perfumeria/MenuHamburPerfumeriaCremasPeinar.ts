import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaCremasPeinar extends BasePage {

    readonly CREMAS_PEINAR: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CREMAS_PEINAR = this.page.locator('//a [@id="menu-item-category-cremas-peinar"]')
        // Cremas para Peinar
    }

    async clickPerfumeriCremasPeinar(): Promise<void> {
        await this.click(this.CREMAS_PEINAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaCremasPeinar(): Promise<void> {
        await this.clickPerfumeriCremasPeinar()
    }
}