import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenAvena extends BasePage {

    readonly AVENA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.AVENA = this.page.locator('//a [@id="menu-item-category-avena"]')
    }

    async clickAlmacenAvena(): Promise<void> {
        await this.click(this.AVENA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenAvena(): Promise<void> {
        await this.clickAlmacenAvena()
    }
}
