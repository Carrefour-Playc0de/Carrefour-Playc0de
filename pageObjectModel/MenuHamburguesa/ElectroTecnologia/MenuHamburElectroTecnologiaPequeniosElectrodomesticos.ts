import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaPequeniosElectrodomesticos extends BasePage {

    readonly PEQUENIOS_ELECTRODOM: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PEQUENIOS_ELECTRODOM =this.page.locator('//a [@id="menu-item-category-electrodomesticos"]')
    }

    async clickElectroTecnologiaPequeniosElectrodomesticos(): Promise<void> {
        await this.click(this.PEQUENIOS_ELECTRODOM)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaPequeniosElectrodomesticos(): Promise<void> {
        await this.clickElectroTecnologiaPequeniosElectrodomesticos()
    }
}
