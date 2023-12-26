import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilToallasToallones extends BasePage {

    readonly TOALLAS_TOALLONES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TOALLAS_TOALLONES = this.page.locator('//a [@id="menu-item-category-toallas-y-toallones"]')
    }

    async clickBazarTextilToallasToallones(): Promise<void> {
        await this.click(this.TOALLAS_TOALLONES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilToallasToallones(): Promise<void> {
        await this.clickBazarTextilToallasToallones()
    }
}
