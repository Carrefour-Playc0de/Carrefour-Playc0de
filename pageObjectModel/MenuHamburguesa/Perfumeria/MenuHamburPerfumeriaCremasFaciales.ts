import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaCremasFaciales extends BasePage {

    readonly CREMAS_FACIALES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CREMAS_FACIALES = this.page.locator('//*[@id="menu-item-category-cremas-faciales"]')
        // Cremas Faciales
    }

    async clickPerfumeriaCremasFaciales(): Promise<void> {
        await this.click(this.CREMAS_FACIALES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaCremasFaciales(): Promise<void> {
        await this.clickPerfumeriaCremasFaciales()
    }
}
