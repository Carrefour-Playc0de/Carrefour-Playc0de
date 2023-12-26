import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosPanaderia extends BasePage {

    readonly PANADERIA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PANADERIA = this.page.locator('//a [@id="menu-item-category-panaderia"]')
    }

    async clickDestacadosPanaderia(): Promise<void> {
        await this.click(this.PANADERIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosPanaderia(): Promise<void> {
        await this.clickDestacadosPanaderia()
    }
}
