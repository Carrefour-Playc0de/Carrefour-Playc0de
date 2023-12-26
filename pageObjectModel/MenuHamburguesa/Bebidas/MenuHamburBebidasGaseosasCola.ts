import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasGaseosasCola extends BasePage {

    readonly GASEOSAS_COLA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GASEOSAS_COLA = this.page.locator('//a [@id="menu-item-category-gaseosas-cola"]')
    }

    async clickBebidasGaseosasCola(): Promise<void> {
        await this.click(this.GASEOSAS_COLA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasGaseosasCola(): Promise<void> {
        await this.clickBebidasGaseosasCola()
    }
}
