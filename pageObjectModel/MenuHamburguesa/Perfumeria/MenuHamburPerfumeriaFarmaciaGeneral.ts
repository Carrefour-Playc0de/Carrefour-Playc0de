import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaFarmaciaGeneral extends BasePage {

    readonly FARMACIA_GENERAL: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FARMACIA_GENERAL = this.page.locator('//* [@id="menu-item-category-farmacia-general"]')
        // Farmacia General
    }

    async clickPerfumeriaFarmaciaGeneral(): Promise<void> {
        await this.click(this.FARMACIA_GENERAL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaFarmaciaGeneral(): Promise<void> {
        await this.clickPerfumeriaFarmaciaGeneral()
    }
}
