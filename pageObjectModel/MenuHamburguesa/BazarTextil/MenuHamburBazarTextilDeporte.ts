import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilDeporte extends BasePage {

    readonly DEPORTE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DEPORTE = this.page.locator('//a [@id="menu-item-category-deporte"]')
    }

    async clickBazarTextilDeporte(): Promise<void> {
        await this.click(this.DEPORTE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilDeporte(): Promise<void> {
        await this.clickBazarTextilDeporte()
    }
}
