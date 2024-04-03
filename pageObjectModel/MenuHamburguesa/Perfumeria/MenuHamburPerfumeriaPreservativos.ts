import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaPreservativos extends BasePage {

    readonly PRESERVATIVOS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PRESERVATIVOS = this.page.locator('//* [@id="menu-item-category-preservativos"]')
    }

    async clickPerfumeriaPreservativos(): Promise<void> {
        await this.click(this.PRESERVATIVOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaPreservativos(): Promise<void> {
        await this.clickPerfumeriaPreservativos()
    }
}
