import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasGaseosasNaranja extends BasePage {

    readonly GASEOSAS_NARANJA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GASEOSAS_NARANJA = this.page.locator('//a [@id="menu-item-category-gaseosas-naranja"]')
    }

    async clickBebidasGaseosasNaranja(): Promise<void> {
        await this.click(this.GASEOSAS_NARANJA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasGaseosasNaranja(): Promise<void> {
        await this.clickBebidasGaseosasNaranja()
    }
}
