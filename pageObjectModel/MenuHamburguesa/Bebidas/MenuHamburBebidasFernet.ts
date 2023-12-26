import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasFernet extends BasePage {

    readonly FERNET: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FERNET = this.page.locator('//a [@id="menu-item-category-fernet"]')
    }

    async clickBebidasFernet(): Promise<void> {
        await this.click(this.FERNET)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasFernet(): Promise<void> {
        await this.clickBebidasFernet()
    }
}
