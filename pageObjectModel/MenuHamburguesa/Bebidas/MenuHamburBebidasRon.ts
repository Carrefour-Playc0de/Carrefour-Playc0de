import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasRon extends BasePage {

    readonly RON: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.RON = this.page.locator('//a [@id="menu-item-category-ron"]')
    }

    async clickBebidasRon(): Promise<void> {
        await this.click(this.RON)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasRon(): Promise<void> {
        await this.clickBebidasRon()
    }
}
