import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasJugosConcentrados extends BasePage {

    readonly JUGOS_CONCENTRADOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.JUGOS_CONCENTRADOS = this.page.locator('//a [@id="menu-item-category-jugos-concentrados"]')
    }

    async clickBebidasJugosConcentrados(): Promise<void> {
        await this.click(this.JUGOS_CONCENTRADOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasJugosConcentrados(): Promise<void> {
        await this.clickBebidasJugosConcentrados()
    }
}
