import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaCanastasBloques extends BasePage {

    readonly CANASTAS_BLOQUES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CANASTAS_BLOQUES = this.page.locator('//a [@id="menu-item-category-canastas-bloques"]')
    }

    async clickLimpiezaCanastasBloques(): Promise<void> {
        await this.click(this.CANASTAS_BLOQUES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(7000)
    }

    async navigateToMenuHamburLimpiezaCanastasBloques(): Promise<void> {
        await this.clickLimpiezaCanastasBloques()
    }
}
