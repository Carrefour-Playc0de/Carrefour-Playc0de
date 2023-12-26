import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburFrutasVerdurasVerduras extends BasePage {

    readonly VERDURAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.VERDURAS = this.page.locator('//a [@id="menu-item-category-verduras"]')
    }

    async clickFrutasVerdurasVerduras(): Promise<void> {
        await this.click(this.VERDURAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburFrutasVerdurasVerduras(): Promise<void> {
        await this.clickFrutasVerdurasVerduras()
    }
}
