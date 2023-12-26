import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilAdhesivos extends BasePage {

    readonly ADHESIVOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ADHESIVOS = this.page.locator('//a [@id="menu-item-category-adhesivos"]')
    }

    async clickBazarTextilAdhesivos(): Promise<void> {
        await this.click(this.ADHESIVOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilAdhesivos(): Promise<void> {
        await this.clickBazarTextilAdhesivos()
    }
}
