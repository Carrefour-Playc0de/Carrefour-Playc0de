import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosMundoBebe extends BasePage {

    readonly MUNDO_BEBE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MUNDO_BEBE = this.page.locator('//a [@id="menu-item-category-mundo-bebe"]')
    }

    async clickDestacadosMundoBebe(): Promise<void> {
        await this.click(this.MUNDO_BEBE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosMundoBebe(): Promise<void> {
        await this.clickDestacadosMundoBebe()
    }
}
