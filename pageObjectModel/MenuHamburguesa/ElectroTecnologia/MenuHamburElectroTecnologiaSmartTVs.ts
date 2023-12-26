import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaSmartTVs extends BasePage {

    readonly SMART_TVs: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SMART_TVs =this.page.locator('//a [@id="menu-item-category-smart-tv-soportes"]')
    }

    async clickElectroTecnologiaSmartTVs(): Promise<void> {
        await this.click(this.SMART_TVs)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaSmartTVs(): Promise<void> {
        await this.clickElectroTecnologiaSmartTVs()
    }
}
