import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaGolosinasChocolates extends BasePage {

    readonly GOLOSINAS_CHOCOLATES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GOLOSINAS_CHOCOLATES = this.page.locator('//a [@id="menu-item-category-golosinas-chocolates"]')
    }

    async clickDesayunoMeriendaGolosinasChocolates(): Promise<void> {
        await this.click(this.GOLOSINAS_CHOCOLATES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaGolosinasChocolates(): Promise<void> {
        await this.clickDesayunoMeriendaGolosinasChocolates()
    }
}
