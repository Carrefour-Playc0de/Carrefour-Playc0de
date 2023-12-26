import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenSnacks extends BasePage {

    readonly SNACKS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SNACKS = this.page.locator('//a [@id="menu-item-category-snacks"]')
    }

    async clickAlmacenSnacks(): Promise<void> {
        await this.click(this.SNACKS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenSnacks(): Promise<void> {
        await this.clickAlmacenSnacks()
    }
}
