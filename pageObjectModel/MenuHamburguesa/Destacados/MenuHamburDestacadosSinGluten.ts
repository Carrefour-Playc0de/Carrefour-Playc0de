import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosSinGluten extends BasePage {

    readonly SIN_GLUTEN: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SIN_GLUTEN = this.page.locator('//a [@id="menu-item-category-sin-gluten"]')
    }

    async clickDestacadosSinGluten(): Promise<void> {
        await this.click(this.SIN_GLUTEN)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosSinGluten(): Promise<void> {
        await this.clickDestacadosSinGluten()
    }
}
