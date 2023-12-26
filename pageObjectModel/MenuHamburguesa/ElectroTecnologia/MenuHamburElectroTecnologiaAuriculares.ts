import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaAuriculares extends BasePage {

    readonly AURICULARES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.AURICULARES = this.page.locator('//div[contains(text(),\'Auriculares\')]')
        this.AURICULARES = this.page.locator('//a [@id="menu-item-category-auriculares"]')
    }

    async clickElectroTecnologiaAuriculares(): Promise<void> {
        await this.click(this.AURICULARES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaAuriculares(): Promise<void> {
        await this.clickElectroTecnologiaAuriculares()
    }
}
