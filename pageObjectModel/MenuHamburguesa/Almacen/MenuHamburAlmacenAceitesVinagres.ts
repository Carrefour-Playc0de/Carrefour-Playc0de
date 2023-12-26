import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburguesaAlmacenAceitesVinagres extends BasePage {

    readonly ACEITES_VINAGRES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ACEITES_VINAGRES = this.page.locator('//a [@id="menu-item-category-aceites-vinagres"]')
    }

    async clickAlmacenAceitesVinagres(): Promise<void> {
        await this.click(this.ACEITES_VINAGRES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenAceitesVinagres(): Promise<void> {
        await this.clickAlmacenAceitesVinagres()
    }
}