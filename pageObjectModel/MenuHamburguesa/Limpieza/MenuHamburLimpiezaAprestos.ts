import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaAprestos extends BasePage {

    readonly APRESTOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.APRESTOS = this.page.locator('//a [@id="menu-item-category-aprestos"]')
    }

    async clickLimpiezaAprestos(): Promise<void> {
        await this.click(this.APRESTOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLimpiezaAprestos(): Promise<void> {
        await this.clickLimpiezaAprestos()
    }
}
