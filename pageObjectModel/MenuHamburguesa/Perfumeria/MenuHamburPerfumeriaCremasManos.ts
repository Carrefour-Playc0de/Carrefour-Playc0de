import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaCremasManos extends BasePage {

    readonly CREMAS_MANOS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CREMAS_MANOS = this.page.locator('//*[@id="menu-item-category-cremas-manos"]')
    }

    async clickPerfumeriaCremasManos(): Promise<void> {
        await this.click(this.CREMAS_MANOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaCremasManos(): Promise<void> {
        await this.clickPerfumeriaCremasManos()
    }
}
