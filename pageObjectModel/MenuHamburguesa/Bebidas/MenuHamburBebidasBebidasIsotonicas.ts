import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasBebidasIsotonicas extends BasePage {

    readonly BEBIDAS_ISOTONICAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BEBIDAS_ISOTONICAS = this.page.locator('//a [@id="menu-item-category-bebidas-isotonicas"]')
    }

    async clickBebidasBebidasIsotonicas(): Promise<void> {
        await this.click(this.BEBIDAS_ISOTONICAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasBebidasIsotonicas(): Promise<void> {
        await this.clickBebidasBebidasIsotonicas()
    }
}
