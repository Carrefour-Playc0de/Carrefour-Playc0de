import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosYogures extends BasePage {

    readonly YOGURES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.YOGURES = this.page.locator('//a [@id="menu-item-category-yogures"]')
    }

    async clickLacteosProdsFrescosYogures(): Promise<void> {
        await this.click(this.YOGURES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosYogures(): Promise<void> {
        await this.clickLacteosProdsFrescosYogures()
    }
}
