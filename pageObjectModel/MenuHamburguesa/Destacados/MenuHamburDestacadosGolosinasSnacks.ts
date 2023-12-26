import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosGolosinasSnacks extends BasePage {

    readonly GOLOSINAS_SNACKS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GOLOSINAS_SNACKS = this.page.locator('//a [@id="menu-item-category-golosinas-snacks"]')
    }

    async clickDestacadosGolosinasSnacks(): Promise<void> {
        await this.click(this.GOLOSINAS_SNACKS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosGolosinasSnacks(): Promise<void> {
        await this.clickDestacadosGolosinasSnacks()
    }
}
