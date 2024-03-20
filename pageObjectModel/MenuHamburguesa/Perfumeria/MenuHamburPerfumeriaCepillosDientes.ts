import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaCepillosDientes extends BasePage {

    readonly CEPILLOS_DIENTES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CEPILLOS_DIENTES = this.page.locator('//a [@id="menu-item-category-cepillos-dientes"]')
    }

    async clickPerfumeriaCepillosDientes(): Promise<void> {
        await this.click(this.CEPILLOS_DIENTES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaCepillosDientes(): Promise<void> {
        await this.clickPerfumeriaCepillosDientes()
    }
}
