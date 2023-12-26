import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilCamping extends BasePage {

    readonly CAMPING: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CAMPING = this.page.locator('//a [@id="menu-item-category-camping"]')
    }

    async clickBazarTextilCamping(): Promise<void> {
        await this.click(this.CAMPING)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilCamping(): Promise<void> {
        await this.clickBazarTextilCamping()
    }
}
