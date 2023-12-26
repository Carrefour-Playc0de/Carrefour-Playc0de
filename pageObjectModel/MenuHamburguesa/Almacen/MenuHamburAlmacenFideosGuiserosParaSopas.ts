import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenFideosGuiserosParaSopas extends BasePage {

    readonly FIDEOS_GUISEROS_SOPAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FIDEOS_GUISEROS_SOPAS = this.page.locator('//a [@id="menu-item-category-fideos-guiseros-sopas"]')
    }

    async clickAlmacenFideosGuiserosParaSopas(): Promise<void> {
        await this.click(this.FIDEOS_GUISEROS_SOPAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenFideosGuiserosParaSopas(): Promise<void> {
        await this.clickAlmacenFideosGuiserosParaSopas()
    }
}
