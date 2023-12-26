import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosQuesosCremasUntables extends BasePage {

    readonly QUESOS_CREMAS_UNTABLES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.QUESOS_CREMAS_UNTABLES = this.page.locator('//a [@id="menu-item-category-quesos-cremas-untables"]')
    }

    async clickLacteosProdsFrescosQuesosCremasUntables(): Promise<void> {
        await this.click(this.QUESOS_CREMAS_UNTABLES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosQuesosCremasUntables(): Promise<void> {
        await this.clickLacteosProdsFrescosQuesosCremasUntables()
    }
}
