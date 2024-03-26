import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaCuidadoCorporal extends BasePage {

    readonly CUIDADO_CORPORAL: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CUIDADO_CORPORAL = this.page.locator('//* [@id="menu-item-category-cuidado-corporal"]')
    }

    async clickPerfumeriaCuidadoCorporal(): Promise<void> {
        await this.click(this.CUIDADO_CORPORAL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaCuidadoCorporal(): Promise<void> {
        await this.clickPerfumeriaCuidadoCorporal()
    }
}
