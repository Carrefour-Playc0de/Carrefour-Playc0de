import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenPostresFlanes extends BasePage {

    readonly POSTRES_FLANES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.POSTRES_FLANES = this.page.locator('//a [@id="menu-item-category-postres-flanes"]')
    }

    async clickAlmacenPostresFlanes(): Promise<void> {
        await this.click(this.POSTRES_FLANES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenPostresFlanes(): Promise<void> {
        await this.clickAlmacenPostresFlanes()
    }
}
