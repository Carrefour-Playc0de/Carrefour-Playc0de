import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaJabonesBarra extends BasePage {

    readonly JABONES_BARRA: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.JABONES_BARRA = this.page.locator('//* [@id="menu-item-category-jabones-barra"]')
    }

    async clickPerfumeriaJabonesBarra(): Promise<void> {
        await this.click(this.JABONES_BARRA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaJabonesBarra(): Promise<void> {
        await this.clickPerfumeriaJabonesBarra()
    }
}
