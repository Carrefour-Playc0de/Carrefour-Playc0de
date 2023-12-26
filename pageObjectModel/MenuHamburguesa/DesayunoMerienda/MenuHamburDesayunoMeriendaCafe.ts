import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaCafe extends BasePage {

    readonly CAFE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CAFE = this.page.locator('//a [@id="menu-item-category-cafe"]')
    }

    async clickDesayunoMeriendaCafe(): Promise<void> {
        await this.click(this.CAFE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaCafe(): Promise<void> {
        await this.clickDesayunoMeriendaCafe()
    }
}
