import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaCuidadoDental extends BasePage {

    readonly CUIDADO_DENTAL: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CUIDADO_DENTAL = this.page.locator('//a [@id="menu-item-category-cuidado-dental"]')
    }

    async clickPerfumeriaCuidadoDental(): Promise<void> {
        await this.click(this.CUIDADO_DENTAL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaCuidadoDental(): Promise<void> {
        await this.clickPerfumeriaCuidadoDental()
    }
}
