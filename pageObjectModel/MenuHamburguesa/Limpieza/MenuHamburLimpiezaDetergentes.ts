import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaDetergentes extends BasePage {

    readonly DETERGENTES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DETERGENTES = this.page.locator('//a [@id="menu-item-category-detergentes"]')
    }

    async clickLimpiezaDetergentes(): Promise<void> {
        await this.click(this.DETERGENTES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(7000)
    }

    async navigateToMenuHamburLimpiezaDetergentes(): Promise<void> {
        await this.clickLimpiezaDetergentes()
    }
}
