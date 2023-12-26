import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilVajilla extends BasePage {

    readonly VAJILLA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.VAJILLA = this.page.locator('//a [@id="menu-item-category-vajilla"]')
    }

    async clickBazarTextilVajilla(): Promise<void> {
        await this.click(this.VAJILLA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilVajilla(): Promise<void> {
        await this.clickBazarTextilVajilla()
    }
}
