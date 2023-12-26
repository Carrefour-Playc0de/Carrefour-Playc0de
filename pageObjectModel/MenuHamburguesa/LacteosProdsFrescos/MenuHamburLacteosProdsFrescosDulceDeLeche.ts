import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosDulceDeLeche extends BasePage {

    readonly DULCE_DE_LECHE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DULCE_DE_LECHE = this.page.locator('//a [@id="menu-item-category-dulce-leche-fresco"]')
    }

    async clickLacteosProdsFrescosDulceDeLeche(): Promise<void> {
        await this.click(this.DULCE_DE_LECHE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosDulceDeLeche(): Promise<void> {
        await this.clickLacteosProdsFrescosDulceDeLeche()
    }
}
