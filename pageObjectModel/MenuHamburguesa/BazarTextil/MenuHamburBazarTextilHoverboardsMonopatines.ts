import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilHoverboardsMonopatines extends BasePage {

    readonly HOVERBOARDS_MONOPATINES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HOVERBOARDS_MONOPATINES = this.page.locator('//a [@id="menu-item-category-hoverboards-monopatines"]')
    }

    async clickBazarTextilHoverboardsMonopatines(): Promise<void> {
        await this.click(this.HOVERBOARDS_MONOPATINES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilHoverboardsMonopatines(): Promise<void> {
        await this.clickBazarTextilHoverboardsMonopatines()
    }
}
