import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilPinturas extends BasePage {

    readonly PINTURAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PINTURAS = this.page.locator('//a [@id="menu-item-category-pinturas"]')
    }

    async clickBazarTextilPinturas(): Promise<void> {
        await this.click(this.PINTURAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilPinturas(): Promise<void> {
        await this.clickBazarTextilPinturas()
    }
}
