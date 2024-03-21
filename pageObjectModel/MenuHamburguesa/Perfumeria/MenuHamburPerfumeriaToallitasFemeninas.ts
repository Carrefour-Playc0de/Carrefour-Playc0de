import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaToallitasFemeninas extends BasePage {

    readonly TOALLITAS_FEMENINAS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TOALLITAS_FEMENINAS = this.page.locator('//* [@id="menu-item-category-toallitas-femeninas"]')
    }

    async clickPerfumeriaToallitasFemeninas(): Promise<void> {
        await this.click(this.TOALLITAS_FEMENINAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaToallitasFemeninas(): Promise<void> {
        await this.clickPerfumeriaToallitasFemeninas()
    }
}
