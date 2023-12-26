import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenSemillas extends BasePage {

    readonly SEMILLAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SEMILLAS = this.page.locator('//a [@id="menu-item-category-semillas"]')
    }

    async clickAlmacenSemillas(): Promise<void> {
        await this.click(this.SEMILLAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenSemillas(): Promise<void> {
        await this.clickAlmacenSemillas()
    }
}
