import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMundoBebeCerealesPapillas extends BasePage {

    readonly CEREALES_PAPILLAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CEREALES_PAPILLAS = this.page.locator('//a [@id="menu-item-category-cereales-papillas"]')
    }

    async clickMundoBebeCerealesPapillas(): Promise<void> {
        await this.click(this.CEREALES_PAPILLAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburMundoBebeCerealesPapillas(): Promise<void> {
        await this.clickMundoBebeCerealesPapillas()
    }
}
