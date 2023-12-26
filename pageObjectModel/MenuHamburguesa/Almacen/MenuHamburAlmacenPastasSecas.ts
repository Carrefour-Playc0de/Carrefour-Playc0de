import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenPastasSecas extends BasePage {

    readonly PASTAS_SECAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PASTAS_SECAS = this.page.locator('//a [@id="menu-item-category-pastas-secas"]')
    }

    async clickAlmacenPastasSecas(): Promise<void> {
        await this.click(this.PASTAS_SECAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenPastasSecas(): Promise<void> {
        await this.clickAlmacenPastasSecas()
    }
}
