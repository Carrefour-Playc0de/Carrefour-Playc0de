import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenLegumbres extends BasePage {

    readonly LEGUMBRES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LEGUMBRES = this.page.locator('//a [@id="menu-item-category-legumbres"]')
    }

    async clickAlmacenLegumbres(): Promise<void> {
        await this.click(this.LEGUMBRES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenLegumbres(): Promise<void> {
        await this.clickAlmacenLegumbres()
    }
}
