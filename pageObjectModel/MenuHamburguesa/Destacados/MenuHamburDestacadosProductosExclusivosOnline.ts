import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosProductosExclusivosOnline extends BasePage {

    readonly PRODUCTOS_EXCLUSIVOS_ONLINE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PRODUCTOS_EXCLUSIVOS_ONLINE = this.page.locator('//a [@id="menu-item-category-precios-corajudos"]')
    }

    async clickDestacadosProductosExclusivosOnline(): Promise<void> {
        await this.click(this.PRODUCTOS_EXCLUSIVOS_ONLINE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosProductosExclusivosOnline(): Promise<void> {
        await this.clickDestacadosProductosExclusivosOnline()
    }
}
