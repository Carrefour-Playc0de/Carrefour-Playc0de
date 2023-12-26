import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasGin extends BasePage {

    readonly GIN: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GIN = this.page.locator('//a [@id="menu-item-category-gin"]')
    }

    async clickBebidasGin(): Promise<void> {
        await this.click(this.GIN)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasGin(): Promise<void> {
        await this.clickBebidasGin()
    }
}
