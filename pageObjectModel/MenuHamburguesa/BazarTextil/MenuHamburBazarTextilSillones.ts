import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilSillones extends BasePage {

    readonly SILLONES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SILLONES = this.page.locator('//a [@id="menu-item-category-sillones"]')
    }

    async clickBazarTextilSillones(): Promise<void> {
        await this.click(this.SILLONES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilSillones(): Promise<void> {
        await this.clickBazarTextilSillones()
    }
}
