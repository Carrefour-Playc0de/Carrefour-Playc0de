import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasVinos extends BasePage {

    readonly VINOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.VINOS = this.page.locator('//a [@id="menu-item-category-vinos"]')
    }

    async clickBebidasVinos(): Promise<void> {
        await this.click(this.VINOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasVinos(): Promise<void> {
        await this.clickBebidasVinos()
    }
}
