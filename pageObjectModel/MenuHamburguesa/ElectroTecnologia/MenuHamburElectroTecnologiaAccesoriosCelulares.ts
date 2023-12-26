import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaAccesoriosCelulares extends BasePage {

    readonly ACCESORIOS_CELULARES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.ACCESORIOS_CELULARES = this.page.locator('//div[contains(text(),\'Accesorios de celulares\')]')
        this.ACCESORIOS_CELULARES = this.page.locator('//a [@id="menu-item-category-accesorios-celulares"]')
    }

    async clickElectroTecnologiaAccesoriosCelulares(): Promise<void> {
        await this.click(this.ACCESORIOS_CELULARES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaAccesoriosCelulares(): Promise<void> {
        await this.clickElectroTecnologiaAccesoriosCelulares()
    }
}
