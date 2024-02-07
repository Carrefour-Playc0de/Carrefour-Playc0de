import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaParaLavavajillas extends BasePage {

    readonly PARA_LAVAVAJILLAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PARA_LAVAVAJILLAS = this.page.locator('//a [@id="menu-item-category-para-lavavajillas"]')
    }

    async clickLimpiezaParaLavavajillas(): Promise<void> {
        await this.click(this.PARA_LAVAVAJILLAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(7000)
    }

    async navigateToMenuHamburLimpiezaParaLavavajillas(): Promise<void> {
        await this.clickLimpiezaParaLavavajillas()
    }
}
