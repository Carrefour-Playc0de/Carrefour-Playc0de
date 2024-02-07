import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaGuantes extends BasePage {

    readonly GUANTES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GUANTES = this.page.locator('//a [@id="menu-item-category-guantes"]')
    }

    async clickLimpiezaGuantes(): Promise<void> {
        await this.click(this.GUANTES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(7000)
    }

    async navigateToMenuHamburLimpiezaGuantes(): Promise<void> {
        await this.clickLimpiezaGuantes()
    }
}
