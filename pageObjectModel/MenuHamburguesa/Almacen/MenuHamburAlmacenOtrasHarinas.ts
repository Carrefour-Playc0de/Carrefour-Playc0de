import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenOtrasHarinas extends BasePage {

    readonly OTRAS_HARINAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.OTRAS_HARINAS = this.page.locator('//a [@id="menu-item-category-otras-harinas"]')
    }

    async clickAlmacenOtrasHarinas(): Promise<void> {
        await this.click(this.OTRAS_HARINAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenOtrasHarinas(): Promise<void> {
        await this.clickAlmacenOtrasHarinas()
    }
}
