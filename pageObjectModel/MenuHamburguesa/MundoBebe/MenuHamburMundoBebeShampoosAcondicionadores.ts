import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMundoBebeShampoosAcondicionadores extends BasePage {

    readonly SHAMPOOS_ACONDICIONADORES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SHAMPOOS_ACONDICIONADORES = this.page.locator('//a [@id="menu-item-category-shampoos-baño"]')
    }

    async clickMundoBebeShampoosAcondicionadores(): Promise<void> {
        await this.click(this.SHAMPOOS_ACONDICIONADORES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburMundoBebeShampoosAcondicionadores(): Promise<void> {
        await this.clickMundoBebeShampoosAcondicionadores()
    }
}
