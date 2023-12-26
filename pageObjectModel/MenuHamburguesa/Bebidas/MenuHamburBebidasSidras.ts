import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasSidras extends BasePage {

    readonly SIDRAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SIDRAS = this.page.locator('//a [@id="menu-item-category-sidras"]')
    }

    async clickBebidasSidras(): Promise<void> {
        await this.click(this.SIDRAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasSidras(): Promise<void> {
        await this.clickBebidasSidras()
    }
}
