import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasWhisky extends BasePage {

    readonly WHISKY: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.WHISKY = this.page.locator('//a [@id="menu-item-category-whisky"]')
    }

    async clickBebidasWhisky(): Promise<void> {
        await this.click(this.WHISKY)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasWhisky(): Promise<void> {
        await this.clickBebidasWhisky()
    }
}
