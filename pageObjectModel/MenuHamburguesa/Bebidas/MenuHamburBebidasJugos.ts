import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasJugos extends BasePage {

    readonly JUGOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.JUGOS = this.page.locator('//a [@id="menu-item-category-jugos"]')
    }

    async clickBebidasJugos(): Promise<void> {
        await this.click(this.JUGOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasJugos(): Promise<void> {
        await this.clickBebidasJugos()
    }
}
