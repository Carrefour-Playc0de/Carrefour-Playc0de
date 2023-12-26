import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenVinagresAcetosLimon extends BasePage {

    readonly VINAGRES_ACETOS_LIMON: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.VINAGRES_ACETOS_LIMON = this.page.locator('//a [@id="menu-item-category-vinagres-acetos-limon"]')
    }

    async clickAlmacenVinagresAcetosLimon(): Promise<void> {
        await this.click(this.VINAGRES_ACETOS_LIMON)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenVinagresAcetosLimon(): Promise<void> {
        await this.clickAlmacenVinagresAcetosLimon()
    }
}
