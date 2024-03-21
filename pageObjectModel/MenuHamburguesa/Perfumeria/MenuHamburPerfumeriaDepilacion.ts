import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaDepilacion extends BasePage {

    readonly DEPILACION: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DEPILACION = this.page.locator('//* [@id="menu-item-category-depilacion"]')
        // Depilacion
    }

    async clickPerfumeriaDepilacion(): Promise<void> {
        await this.click(this.DEPILACION)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaDepilacion(): Promise<void> {
        await this.clickPerfumeriaDepilacion()
    }
}
