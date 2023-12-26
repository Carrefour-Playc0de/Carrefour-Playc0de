import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaCoccion extends BasePage {

    readonly COCCION: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.COCCION =this.page.locator('//a [@id="menu-item-category-coccion"]')
    }

    async clickElectroTecnologiaCoccion(): Promise<void> {
        await this.click(this.COCCION)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaCoccion(): Promise<void> {
        await this.clickElectroTecnologiaCoccion()
    }
}
