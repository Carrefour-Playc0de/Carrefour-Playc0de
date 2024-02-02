import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburCongeladosPollos extends BasePage {

    readonly POLLOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.POLLOS = this.page.locator('//a [@id="menu-item-category-papel-higienico"]');
    }

    async clickCongeladosPollos(): Promise<void> {
        await this.click(this.POLLOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburCongeladosPollos(): Promise<void> {
        await this.clickCongeladosPollos()
    }
}
