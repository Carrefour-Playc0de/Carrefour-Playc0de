import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaParaProtesisDentales extends BasePage {

    readonly PROTESIS_DENTALES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROTESIS_DENTALES = this.page.locator('//a [@id="menu-item-category-para-protesis-dentales"]')
    }

    async clickPerfumeriaParaProtesisDentales(): Promise<void> {
        await this.click(this.PROTESIS_DENTALES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaParaProtesisDentales(): Promise<void> {
        await this.clickPerfumeriaParaProtesisDentales()
    }
}
