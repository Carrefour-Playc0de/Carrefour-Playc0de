import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasGaseosasPomelo extends BasePage {

    readonly GASEOSAS_POMELO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GASEOSAS_POMELO = this.page.locator('//a [@id="menu-item-category-gaseosas-pomelo"]')
    }

    async clickBebidasGaseosasPomelo(): Promise<void> {
        await this.click(this.GASEOSAS_POMELO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasGaseosasPomelo(): Promise<void> {
        await this.clickBebidasGaseosasPomelo()
    }
}
