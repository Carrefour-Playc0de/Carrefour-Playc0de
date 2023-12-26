import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilPiletasInflables extends BasePage {

    readonly PILETAS_INFLABLES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PILETAS_INFLABLES = this.page.locator('//a [@id="menu-item-category-piletas-inflables"]')
    }

    async clickBazarTextilPiletasInflables(): Promise<void> {
        await this.click(this.PILETAS_INFLABLES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilPiletasInflables(): Promise<void> {
        await this.clickBazarTextilPiletasInflables()
    }
}
