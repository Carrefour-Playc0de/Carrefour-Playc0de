import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenSal extends BasePage {

    readonly SAL: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SAL = this.page.locator('//a [@id="menu-item-category-sal"]')
    }

    async clickAlmacenSal(): Promise<void> {
        await this.click(this.SAL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenSal(): Promise<void> {
        await this.clickAlmacenSal()
    }
}
