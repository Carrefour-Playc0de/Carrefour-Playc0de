import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasAperitivosConAlcohol extends BasePage {

    readonly APERITIVOS_CON_ALCOHOL: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.APERITIVOS_CON_ALCOHOL = this.page.locator('//a [@id="menu-item-category-aperitivos-alcohol"]')
    }

    async clickBebidasAperitivosConAlcohol(): Promise<void> {
        await this.click(this.APERITIVOS_CON_ALCOHOL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasAperitivosConAlcohol(): Promise<void> {
        await this.clickBebidasAperitivosConAlcohol()
    }
}
