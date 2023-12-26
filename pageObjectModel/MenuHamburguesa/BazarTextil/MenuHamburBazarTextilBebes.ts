import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilBebes extends BasePage {

    readonly BEBES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BEBES = this.page.locator('//a [@id="menu-item-category-bebes"]')
    }

    async clickBazarTextilBebes(): Promise<void> {
        await this.click(this.BEBES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilBebes(): Promise<void> {
        await this.clickBazarTextilBebes()
    }
}
