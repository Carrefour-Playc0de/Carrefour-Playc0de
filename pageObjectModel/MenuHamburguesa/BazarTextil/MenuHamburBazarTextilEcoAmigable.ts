import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilEcoAmigable extends BasePage {

    readonly ECO_AMIGABLE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ECO_AMIGABLE = this.page.locator('//a [@id="menu-item-category-eco-amigable"]')
    }

    async clickBazarTextilEcoAmigable(): Promise<void> {
        await this.click(this.ECO_AMIGABLE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilEcoAmigable(): Promise<void> {
        await this.clickBazarTextilEcoAmigable()
    }
}
