import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaLustramuebles extends BasePage {

    readonly LUSTRAMUEBLES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LUSTRAMUEBLES = this.page.locator('//a [@id="menu-item-category-lustramuebles"]')
        // Lustramuebles
    }

    async clickLimpiezaLustramuebles(): Promise<void> {
        await this.click(this.LUSTRAMUEBLES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLimpiezaLustramuebles(): Promise<void> {
        await this.clickLimpiezaLustramuebles()
    }
}
