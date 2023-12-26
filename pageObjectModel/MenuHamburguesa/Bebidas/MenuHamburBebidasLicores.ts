import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasLicores extends BasePage {

    readonly LICORES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LICORES = this.page.locator('//a [@id="menu-item-category-licores"]')
    }

    async clickBebidasLicores(): Promise<void> {
        await this.click(this.LICORES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasLicores(): Promise<void> {
        await this.clickBebidasLicores()
    }
}
