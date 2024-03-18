import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaColoracion extends BasePage {

    readonly COLORACION: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.COLORACION = this.page.locator('//a [@id="menu-item-category-coloracion"]')
        // Coloracion
    }

    async clickPerfumeriaColoracion(): Promise<void> {
        await this.click(this.COLORACION)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaColoracion(): Promise<void> {
        await this.clickPerfumeriaColoracion()
    }
}
