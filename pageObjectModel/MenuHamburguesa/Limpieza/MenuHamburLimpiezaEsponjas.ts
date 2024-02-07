import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaEsponjas extends BasePage {

    readonly ESPONJAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ESPONJAS = this.page.locator('//a [@id="menu-item-category-esponjas"]')
    }

    async clickLimpiezaEsponjas(): Promise<void> {
        await this.click(this.ESPONJAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async MenuHamburLimpiezaEsponjas(): Promise<void> {
        await this.clickLimpiezaEsponjas()
    }
}
