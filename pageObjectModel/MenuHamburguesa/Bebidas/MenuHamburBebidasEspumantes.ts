import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasEspumantes extends BasePage {

    readonly ESPUMANTES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ESPUMANTES = this.page.locator('//a [@id="menu-item-category-espumantes"]')
    }

    async clickBebidasEspumantes(): Promise<void> {
        await this.click(this.ESPUMANTES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasEspumantes(): Promise<void> {
        await this.clickBebidasEspumantes()
    }
}
