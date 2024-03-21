import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaProtectoresDiarios extends BasePage {

    readonly PROTECTORES_DIARIOS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROTECTORES_DIARIOS = this.page.locator('//* [@id="menu-item-category-protectores-diarios"]')
    }

    async clickPerfumeriaProtectoresDiarios(): Promise<void> {
        await this.click(this.PROTECTORES_DIARIOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaProtectoresDiarios(): Promise<void> {
        await this.clickPerfumeriaProtectoresDiarios()
    }
}
