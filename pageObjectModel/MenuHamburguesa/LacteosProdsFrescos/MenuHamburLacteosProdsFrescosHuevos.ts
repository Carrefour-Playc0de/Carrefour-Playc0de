import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosHuevos extends BasePage {

    readonly HUEVOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HUEVOS = this.page.locator('//a [@id="menu-item-category-huevos"]')
    }

    async clickLacteosProdsFrescosHuevos(): Promise<void> {
        await this.click(this.HUEVOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosHuevos(): Promise<void> {
        await this.clickLacteosProdsFrescosHuevos()
    }
}
