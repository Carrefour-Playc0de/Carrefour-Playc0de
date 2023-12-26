import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosHogarBazar extends BasePage {

    readonly HOGAR_BAZAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HOGAR_BAZAR = this.page.locator('//a [@id="menu-item-category-hogar-bazar"]')
    }

    async clickDestacadosHogarBazar(): Promise<void> {
        await this.click(this.HOGAR_BAZAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosHogarBazar(): Promise<void> {
        await this.clickDestacadosHogarBazar()
    }
}
