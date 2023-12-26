import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosYoguresEnteros extends BasePage {

    readonly YOGURES_ENTEROS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.YOGURES_ENTEROS = this.page.locator('//a [@id="menu-item-category-yogures-enteros"]')
    }

    async clickLacteosProdsFrescosYoguresEnteros(): Promise<void> {
        await this.click(this.YOGURES_ENTEROS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosYoguresEnteros(): Promise<void> {
        await this.clickLacteosProdsFrescosYoguresEnteros()
    }
}
