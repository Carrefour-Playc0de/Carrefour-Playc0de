import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenReposteriaPostres extends BasePage {

    readonly REPOSTERIA_POSTRES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.REPOSTERIA_POSTRES = this.page.locator('//a [@id="menu-item-category-reposterias-postres"]')
    }

    async clickAlmacenReposteriaPostres(): Promise<void> {
        await this.click(this.REPOSTERIA_POSTRES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenReposteriaPostres(): Promise<void> {
        await this.clickAlmacenReposteriaPostres()
    }
}
