import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaRepelentes extends BasePage {

    readonly REPELENTES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.REPELENTES = this.page.locator('//* [@id="menu-item-category-repelentes"]')
        // Repelentes
    }

    async clickPerfumeriaRepelentes(): Promise<void> {
        await this.click(this.REPELENTES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaRepelentes(): Promise<void> {
        await this.clickPerfumeriaRepelentes()
    }
}
