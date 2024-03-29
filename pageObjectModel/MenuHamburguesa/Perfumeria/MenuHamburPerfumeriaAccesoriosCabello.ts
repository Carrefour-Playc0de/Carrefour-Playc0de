import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaAccesoriosCabello extends BasePage {

    readonly ACCESORIOS_CABELLO: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ACCESORIOS_CABELLO = this.page.locator('//a [@id="menu-item-category-accesorios-cabello"]')
    }

    async clickPerfumeriaAccesoriosCabello(): Promise<void> {
        await this.click(this.ACCESORIOS_CABELLO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaAccesoriosCabello(): Promise<void> {
        await this.clickPerfumeriaAccesoriosCabello()
    }
}
