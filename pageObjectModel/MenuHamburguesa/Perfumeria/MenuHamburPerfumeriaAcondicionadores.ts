import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaAcondicionadores extends BasePage {

    readonly ACONDICIONADORES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ACONDICIONADORES = this.page.locator('//a [@id="menu-item-category-acondicionadores"]')
        // Acondicionadores
    }

    async clickPerfumeriaAcondicionadores(): Promise<void> {
        await this.click(this.ACONDICIONADORES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaAcondicionadores(): Promise<void> {
        await this.clickPerfumeriaAcondicionadores()
    }
}
