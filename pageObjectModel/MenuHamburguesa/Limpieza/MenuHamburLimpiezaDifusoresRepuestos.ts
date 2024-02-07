import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaDifusoresRepuestos extends BasePage {

    readonly DIFUSORES_REPUESTOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DIFUSORES_REPUESTOS = this.page.locator('//a [@id="menu-item-category-difusores-repuestos"]')
    }

    async clickLimpiezaDifusoresRepuestos(): Promise<void> {
        await this.click(this.DIFUSORES_REPUESTOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLimpiezaDifusoresRepuestos(): Promise<void> {
        await this.clickLimpiezaDifusoresRepuestos()
    }
}
