import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaCremasCorporales extends BasePage {

    readonly CREMAS_CORPORALES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CREMAS_CORPORALES = this.page.locator('//*[@id="menu-item-category-cremas-corporales"]')
        // Cremas Corporales
    }

    async clickPerfumeriaCremasCorporales(): Promise<void> {
        await this.click(this.CREMAS_CORPORALES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaCremasCorporales(): Promise<void> {
        await this.clickPerfumeriaCremasCorporales()
    }
}
