import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburCongeladosHamburguesas extends BasePage {

    readonly HAMBURGUESAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HAMBURGUESAS = this.page.locator('//a [@id="menu-item-category-limpieza-ropa"]');
        // this.HAMBURGUESAS = this.page.locator('//div[contains(text(),\'Hamburguesas\')]');
    }

    async clickCongeladosHamburguesas(): Promise<void> {
        await this.click(this.HAMBURGUESAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburCongeladosHamburguesas(): Promise<void> {
        await this.clickCongeladosHamburguesas()
    }
}
