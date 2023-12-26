import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaCelulares extends BasePage {

    readonly CELULARES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CELULARES =this.page.locator('//a [@id="menu-item-category-celulares"]')
    }

    async clickElectroTecnologiaCelulares(): Promise<void> {
        await this.click(this.CELULARES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaCelulares(): Promise<void> {
        await this.clickElectroTecnologiaCelulares()
    }
}
