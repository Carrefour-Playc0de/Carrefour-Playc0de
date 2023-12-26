import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilIndumentaria extends BasePage {

    readonly INDUMENTARIA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.INDUMENTARIA = this.page.locator('//a [@id="menu-item-category-indumentaria"]')
    }

    async clickBazarTextilIndumentaria(): Promise<void> {
        await this.click(this.INDUMENTARIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilIndumentaria(): Promise<void> {
        await this.clickBazarTextilIndumentaria()
    }
}
