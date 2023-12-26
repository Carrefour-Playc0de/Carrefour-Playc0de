import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenArroz extends BasePage {

    readonly ARROZ: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ARROZ = this.page.locator('//a [@id="menu-item-category-arroz"]')
    }

    async clickAlmacenArroz(): Promise<void> {
        await this.click(this.ARROZ)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenArroz(): Promise<void> {
        await this.clickAlmacenArroz()
    }
}
