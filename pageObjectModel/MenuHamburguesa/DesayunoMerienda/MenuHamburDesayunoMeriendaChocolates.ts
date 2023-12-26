import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaChocolates extends BasePage {

    readonly CHOCOLATES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CHOCOLATES = this.page.locator('//a [@id="menu-item-category-chocolates"]')
    }

    async clickDesayunoMeriendaChocolates(): Promise<void> {
        await this.click(this.CHOCOLATES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaChocolates(): Promise<void> {
        await this.clickDesayunoMeriendaChocolates()
    }
}
