import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasFrizzantes extends BasePage {

    readonly FRIZZANTES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FRIZZANTES = this.page.locator('//a [@id="menu-item-category-frizzantes"]')
    }

    async clickBebidasFrizzantes(): Promise<void> {
        await this.click(this.FRIZZANTES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasFrizzantes(): Promise<void> {
        await this.clickBebidasFrizzantes()
    }
}
