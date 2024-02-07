import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaAntihumedad extends BasePage {

    readonly ANTIHUMEDAD: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ANTIHUMEDAD = this.page.locator('//a [@id="menu-item-category-antihumedad"]')
        // Antihumedad
    }

    async clickLimpiezaAntihumedad(): Promise<void> {
        await this.click(this.ANTIHUMEDAD)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLimpiezaAntihumedad(): Promise<void> {
        await this.clickLimpiezaAntihumedad()
    }
}
