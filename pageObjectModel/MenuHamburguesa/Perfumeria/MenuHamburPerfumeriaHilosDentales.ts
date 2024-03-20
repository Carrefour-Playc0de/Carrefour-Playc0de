import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaHilosDentales extends BasePage {

    readonly HILOS_DENTALES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HILOS_DENTALES = this.page.locator('//a [@id="menu-item-category-hilos-dentales"]')
    }

    async clickPerfumeriaHilosDentales(): Promise<void> {
        await this.click(this.HILOS_DENTALES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaHilosDentales(): Promise<void> {
        await this.clickPerfumeriaHilosDentales()
    }
}
