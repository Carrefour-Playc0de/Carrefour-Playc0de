import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburCarnesPescadosCarneCerdo extends BasePage {

    readonly CARNE_CERDO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CARNE_CERDO = this.page.locator('//a [@id="menu-item-category-carne-cerdo"]')
    }

    async clickCarnesPescadosCarneCerdo(): Promise<void> {
        await this.click(this.CARNE_CERDO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburCarnesPescadosCarneCerdo(): Promise<void> {
        await this.clickCarnesPescadosCarneCerdo()
    }
}
