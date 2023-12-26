import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilAutoayuda extends BasePage {

    readonly AUTOAYUDA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.AUTOAYUDA = this.page.locator('//a [@id="menu-item-category-ciencias"]')
    }

    async clickBazarTextilAutoayuda (): Promise<void> {
        await this.click(this.AUTOAYUDA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilAutoayuda (): Promise<void> {
        await this.clickBazarTextilAutoayuda()
    }
}
