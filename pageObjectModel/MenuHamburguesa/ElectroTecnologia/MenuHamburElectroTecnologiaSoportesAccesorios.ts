import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaSoportesAccesorios extends BasePage {

    readonly SOPORTES_ACCESORIOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SOPORTES_ACCESORIOS =this.page.locator('//a [@id="menu-item-category-soporte-accesorios"]')
    }

    async clickElectroTecnologiaSoportesAccesorios(): Promise<void> {
        await this.click(this.SOPORTES_ACCESORIOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaSoportesAccesorios(): Promise<void> {
        await this.clickElectroTecnologiaSoportesAccesorios()
    }
}
