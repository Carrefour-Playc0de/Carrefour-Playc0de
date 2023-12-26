import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasGaseosasLimon extends BasePage {

    readonly GASEOSAS_LIMON: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GASEOSAS_LIMON = this.page.locator('//a [@id="menu-item-category-gaseosas-limon"]')
    }

    async clickBebidasGaseosasLimon(): Promise<void> {
        await this.click(this.GASEOSAS_LIMON)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasGaseosasLimon(): Promise<void> {
        await this.clickBebidasGaseosasLimon()
    }
}
