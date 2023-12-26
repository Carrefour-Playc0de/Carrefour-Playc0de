import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasAperitivosSinAlcohol extends BasePage {

    readonly APERITIVOS_SIN_ALCOHOL: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.APERITIVOS_SIN_ALCOHOL = this.page.locator('//a [@id="menu-item-category-aperitivos-sin-alcohol"]')
    }

    async clickBebidasAperitivosSinAlcohol(): Promise<void> {
        await this.click(this.APERITIVOS_SIN_ALCOHOL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasAperitivosSinAlcohol(): Promise<void> {
        await this.clickBebidasAperitivosSinAlcohol()
    }
}
