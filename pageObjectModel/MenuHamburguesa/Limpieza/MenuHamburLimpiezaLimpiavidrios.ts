import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaLimpiavidrios extends BasePage {

    readonly LIMPIAVIDRIOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIMPIAVIDRIOS = this.page.locator('//a [@id="menu-item-category-limpiavidrios"]')
    }

    async clickLimpiezaLimpiavidrios(): Promise<void> {
        await this.click(this.LIMPIAVIDRIOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(7000)
    }

    async navigateToMenuHamburLimpiezaLimpiavidrios(): Promise<void> {
        await this.clickLimpiezaLimpiavidrios()
    }
}
