import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosQuesos extends BasePage {

    readonly QUESOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.QUESOS = this.page.locator('//a [@id="menu-item-category-quesos"]')
    }

    async clickLacteosProdsFrescosQuesos(): Promise<void> {
        await this.click(this.QUESOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosQuesos(): Promise<void> {
        await this.clickLacteosProdsFrescosQuesos()
    }
}
