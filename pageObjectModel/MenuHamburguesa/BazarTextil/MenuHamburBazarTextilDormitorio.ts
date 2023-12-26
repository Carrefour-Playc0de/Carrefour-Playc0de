import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilDormitorio extends BasePage {

    readonly DORMITORIO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DORMITORIO = this.page.locator('//a [@id="menu-item-category-dormitorio"]')
    }

    async clickBazarTextilDormitorio(): Promise<void> {
        await this.click(this.DORMITORIO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilDormitorio(): Promise<void> {
        await this.clickBazarTextilDormitorio()
    }
}
