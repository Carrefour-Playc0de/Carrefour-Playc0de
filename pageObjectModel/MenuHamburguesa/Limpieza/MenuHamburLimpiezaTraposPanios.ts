import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaTraposPanios extends BasePage {

    readonly TRAPOS_PANIOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TRAPOS_PANIOS = this.page.locator('//a [@id="menu-item-category-trapos-paños"]')
    }

    async clickLimpiezaTraposPanios(): Promise<void> {
        await this.click(this.TRAPOS_PANIOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(7000)
    }

    async navigateToMenuHamburLimpiezaTraposPanios(): Promise<void> {
        await this.clickLimpiezaTraposPanios()
    }
}
