import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilBolsosValijas extends BasePage {

    readonly BOLSOS_VALIJAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOLSOS_VALIJAS = this.page.locator('//a [@id="menu-item-category-bolsos-valijas"]')
    }

    async clickBazarTextilBolsosValijas(): Promise<void> {
        await this.click(this.BOLSOS_VALIJAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilBolsosValijas(): Promise<void> {
        await this.clickBazarTextilBolsosValijas()
    }
}
