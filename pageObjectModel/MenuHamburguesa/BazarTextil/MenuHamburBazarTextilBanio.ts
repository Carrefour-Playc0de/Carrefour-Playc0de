import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilBanio extends BasePage {

    readonly BANIO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BANIO = this.page.locator('//a [@id="menu-item-category-baño"]')
    }

    async clickBazarTextilBanio(): Promise<void> {
        await this.click(this.BANIO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilBanio(): Promise<void> {
        await this.clickBazarTextilBanio()
    }
}
