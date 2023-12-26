import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasGaseosasTonicasOtras extends BasePage {

    readonly GASEOSAS_TONICAS_OTRAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GASEOSAS_TONICAS_OTRAS = this.page.locator('//a [@id="menu-item-category-gaseosas-tonicas-otras"]')
    }

    async clickBebidasGaseosasTonicasOtras(): Promise<void> {
        await this.click(this.GASEOSAS_TONICAS_OTRAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasGaseosasTonicasOtras(): Promise<void> {
        await this.clickBebidasGaseosasTonicasOtras()
    }
}
