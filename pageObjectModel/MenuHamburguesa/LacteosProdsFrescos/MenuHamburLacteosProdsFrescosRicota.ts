import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosRicota extends BasePage {

    readonly RICOTA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.RICOTA = this.page.locator('//a [@id="menu-item-category-ricota"]')
    }

    async clickLacteosProdsFrescosRicota(): Promise<void> {
        await this.click(this.RICOTA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosRicota(): Promise<void> {
        await this.clickLacteosProdsFrescosRicota()
    }
}
