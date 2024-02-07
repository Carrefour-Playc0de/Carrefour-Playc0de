import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaCestosBasuras extends BasePage {

    readonly CESTOS_BASURAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CESTOS_BASURAS = this.page.locator('//a [@id="menu-item-category-cestos-basuras"]')
    }

    async clickLimpiezaCestosBasuras(): Promise<void> {
        await this.click(this.CESTOS_BASURAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLimpiezaCestosBasuras(): Promise<void> {
        await this.clickLimpiezaCestosBasuras()
    }
}
