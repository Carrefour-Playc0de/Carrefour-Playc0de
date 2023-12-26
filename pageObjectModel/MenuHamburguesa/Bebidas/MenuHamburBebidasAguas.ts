import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasAguas extends BasePage {

    readonly AGUAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.AGUAS = this.page.locator('//a [@id="menu-item-category-aguas"]')
    }

    async clickBebidasAguas(): Promise<void> {
        await this.click(this.AGUAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasAguas(): Promise<void> {
        await this.clickBebidasAguas()
    }
}
