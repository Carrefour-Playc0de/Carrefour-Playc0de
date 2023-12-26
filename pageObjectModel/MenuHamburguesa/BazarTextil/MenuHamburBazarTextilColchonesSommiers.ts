import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilColchonesSommiers extends BasePage {

    readonly COLCHONES_SOMMIERS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.COLCHONES_SOMMIERS = this.page.locator('//a [@id="menu-item-category-colchones-sommiers"]')
    }

    async clickBazarTextilColchonesSommiers(): Promise<void> {
        await this.click(this.COLCHONES_SOMMIERS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilColchonesSommiers(): Promise<void> {
        await this.clickBazarTextilColchonesSommiers()
    }
}
