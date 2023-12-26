import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenAceitesAerosol extends BasePage {

    readonly ACEITES_AEROSOL: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ACEITES_AEROSOL = this.page.locator('//a [@id="menu-item-category-aceites-aerosol"]')
    }

    async clickAlmacenAceitesAerosol(): Promise<void> {
        await this.click(this.ACEITES_AEROSOL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenAceitesAerosol(): Promise<void> {
        await this.clickAlmacenAceitesAerosol()
    }
}
