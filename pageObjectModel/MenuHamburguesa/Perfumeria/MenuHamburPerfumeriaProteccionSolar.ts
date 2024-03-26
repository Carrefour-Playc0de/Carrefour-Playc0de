import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaProteccionSolar extends BasePage {

    readonly PROTECCION_SOLAR: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROTECCION_SOLAR = this.page.locator('//*[@id="menu-item-category-proteccion-solar"]')
    }

    async clickPerfumeriaProteccionSolar(): Promise<void> {
        await this.click(this.PROTECCION_SOLAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaProteccionSolar(): Promise<void> {
        await this.clickPerfumeriaProteccionSolar()
    }
}
