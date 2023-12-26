import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosPerfumeria extends BasePage {

    readonly PERFUMERIA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PERFUMERIA = this.page.locator('//a [@id="menu-item-category-perfumeria"]')
    }

    async clickDestacadosPerfumeria(): Promise<void> {
        await this.click(this.PERFUMERIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosPerfumeria(): Promise<void> {
        await this.clickDestacadosPerfumeria()
    }
}
