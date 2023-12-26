import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenComplementos extends BasePage {

    readonly COMPLEMENTOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.COMPLEMENTOS = this.page.locator('//a [@id="menu-item-category-complementos"]')
    }

    async clickAlmacenComplementos(): Promise<void> {
        await this.click(this.COMPLEMENTOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenComplementos(): Promise<void> {
        await this.clickAlmacenComplementos()
    }
}
