import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilAireLibre extends BasePage {

    readonly AIRE_LIBRE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.AIRE_LIBRE = this.page.locator('//a [@id="menu-item-category-aire-libre"]')
    }

    async clickBazarTextilAireLibre(): Promise<void> {
        await this.click(this.AIRE_LIBRE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilAireLibre(): Promise<void> {
        await this.clickBazarTextilAireLibre()
    }
}
