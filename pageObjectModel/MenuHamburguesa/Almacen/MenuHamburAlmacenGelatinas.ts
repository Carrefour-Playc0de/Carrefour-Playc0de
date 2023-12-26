import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenGelatinas extends BasePage {

    readonly GELATINAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GELATINAS = this.page.locator('//a [@id="menu-item-category-gelatinas"]')
    }

    async clickAlmacenGelatinas(): Promise<void> {
        await this.click(this.GELATINAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenGelatinas(): Promise<void> {
        await this.clickAlmacenGelatinas()
    }
}
