import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosQuesosDurosSemiDuros extends BasePage {

    readonly QUESOS_DUROS_SEMI_DUROS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.QUESOS_DUROS_SEMI_DUROS = this.page.locator('//a [@id="menu-item-category-quesos-duros-semi"]')
    }

    async clickLacteosProdsFrescosQuesosDurosSemiDuros(): Promise<void> {
        await this.click(this.QUESOS_DUROS_SEMI_DUROS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosQuesosDurosSemiDuros(): Promise<void> {
        await this.clickLacteosProdsFrescosQuesosDurosSemiDuros()
    }
}
