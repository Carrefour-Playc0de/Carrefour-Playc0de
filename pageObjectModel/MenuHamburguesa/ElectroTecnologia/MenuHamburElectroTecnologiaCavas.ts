import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaCavas extends BasePage {

    readonly CAVAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CAVAS =this.page.locator('//a [@id="menu-item-category-cavas"]')
    }

    async clickElectroTecnologiaCavas(): Promise<void> {
        await this.click(this.CAVAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaCavas(): Promise<void> {
        await this.clickElectroTecnologiaCavas()
    }
}
