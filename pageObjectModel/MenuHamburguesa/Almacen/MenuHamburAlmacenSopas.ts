import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenSopas extends BasePage {

    readonly SOPAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SOPAS = this.page.locator('//a [@id="menu-item-category-sopas"]')
    }

    async clickAlmacenSopas(): Promise<void> {
        await this.click(this.SOPAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenSopas(): Promise<void> {
        await this.clickAlmacenSopas()
    }
}
