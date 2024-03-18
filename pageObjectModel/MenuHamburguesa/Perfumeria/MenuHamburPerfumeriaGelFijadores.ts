import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaGelFijadores extends BasePage {

    readonly GEL_FIJADORES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GEL_FIJADORES = this.page.locator('//a [@id="menu-item-category-gel-fijadores"]')
    }

    async clickPerfumeriaGelFijadores(): Promise<void> {
        await this.click(this.GEL_FIJADORES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaGelFijadores(): Promise<void> {
        await this.clickPerfumeriaGelFijadores()
    }
}
