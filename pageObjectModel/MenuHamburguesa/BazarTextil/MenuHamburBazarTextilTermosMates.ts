import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilTermosMates extends BasePage {

    readonly TERMOS_MATES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TERMOS_MATES = this.page.locator('//a [@id="menu-item-category-termos-mates"]')
    }

    async clickBazarTextilTermosMates(): Promise<void> {
        await this.click(this.TERMOS_MATES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilTermosMates(): Promise<void> {
        await this.clickBazarTextilTermosMates()
    }
}
