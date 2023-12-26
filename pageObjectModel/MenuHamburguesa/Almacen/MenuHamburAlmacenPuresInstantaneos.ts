import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenPuresInstantaneos extends BasePage {

    readonly PURES_INSTANTANEOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PURES_INSTANTANEOS = this.page.locator('//a [@id="menu-item-category-pure-instantaneo"]')
    }

    async clickAlmacenPuresInstantaneos(): Promise<void> {
        await this.click(this.PURES_INSTANTANEOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenPuresInstantaneos(): Promise<void> {
        await this.clickAlmacenPuresInstantaneos()
    }
}
