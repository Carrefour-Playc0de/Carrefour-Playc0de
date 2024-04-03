import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaFragancias extends BasePage {

    readonly FRAGANCIAS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FRAGANCIAS = this.page.locator('//* [@id="menu-item-category-fragancias"]')
    }

    async clickPerfumeriaFragancias(): Promise<void> {
        await this.click(this.FRAGANCIAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaFragancias(): Promise<void> {
        await this.clickPerfumeriaFragancias()
    }
}
