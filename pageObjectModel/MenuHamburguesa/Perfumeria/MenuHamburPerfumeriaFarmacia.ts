import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaFarmacia extends BasePage {

    readonly FARMACIA: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FARMACIA = this.page.locator('//* [@id="menu-item-category-farmacia"]')
    }

    async clickPerfumeriaFarmacia(): Promise<void> {
        await this.click(this.FARMACIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaFarmacia(): Promise<void> {
        await this.clickPerfumeriaFarmacia()
    }
}
