import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaCereales extends BasePage {

    readonly CEREALES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CEREALES = this.page.locator('//a [@id="menu-item-category-cereales"]')
    }

    async clickDesayunoMeriendaCereales(): Promise<void> {
        await this.click(this.CEREALES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaCereales(): Promise<void> {
        await this.clickDesayunoMeriendaCereales()
    }
}
