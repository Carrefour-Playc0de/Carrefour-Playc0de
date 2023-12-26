import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosDietetica extends BasePage {

    readonly DIETETICA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DIETETICA = this.page.locator('//*[@id="menu-item-category-vinos-mes"]/div[contains(text(),\'La Dietética\')]')
    }

    async clickDestacadosDietetica(): Promise<void> {
        await this.click(this.DIETETICA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosDietetica(): Promise<void> {
        await this.clickDestacadosDietetica()
    }
}
