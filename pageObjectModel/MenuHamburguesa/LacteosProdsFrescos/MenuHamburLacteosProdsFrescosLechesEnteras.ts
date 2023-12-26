import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosLechesEnteras extends BasePage {

    readonly LECHES_ENTERAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LECHES_ENTERAS = this.page.locator('//a [@id="menu-item-category-leches-enteras"]')
    }

    async clickLacteosProdsFrescosLechesEnteras(): Promise<void> {
        await this.click(this.LECHES_ENTERAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosLechesEnteras(): Promise<void> {
        await this.clickLacteosProdsFrescosLechesEnteras()
    }
}
