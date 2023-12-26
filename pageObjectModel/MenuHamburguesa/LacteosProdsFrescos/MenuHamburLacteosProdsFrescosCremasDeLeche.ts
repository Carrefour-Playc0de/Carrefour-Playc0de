import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosCremasDeLeche extends BasePage {

    readonly CREMAS_DE_LECHE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CREMAS_DE_LECHE = this.page.locator('//a [@id="menu-item-category-cremas-leche"]')
    }

    async clickLacteosProdsFrescosCremasDeLeche(): Promise<void> {
        await this.click(this.CREMAS_DE_LECHE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosCremasDeLeche(): Promise<void> {
        await this.clickLacteosProdsFrescosCremasDeLeche()
    }
}
