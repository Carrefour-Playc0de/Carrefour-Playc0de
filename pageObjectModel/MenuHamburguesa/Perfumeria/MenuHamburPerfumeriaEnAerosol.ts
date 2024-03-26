import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaEnAerosol extends BasePage {

    readonly EN_AEROSOL: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.EN_AEROSOL = this.page.locator('//*[@id="menu-item-category-femeninos"]')
    }

    async clickPerfumeriaEnAerosol(): Promise<void> {
        await this.click(this.EN_AEROSOL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaEnAerosol(): Promise<void> {
        await this.clickPerfumeriaEnAerosol()
    }
}
