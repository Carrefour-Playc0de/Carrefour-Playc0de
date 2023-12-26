import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaLicuadorasProcesadorasGasificadoras extends BasePage {

    readonly LICUADO_PROCESADO_GASIFICAD: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LICUADO_PROCESADO_GASIFICAD =this.page.locator('//a [@id="menu-item-category-licuadoras-procesadoras"]')
    }

    async clickElectroTecnologiaLicuadorasProcesadorasGasificadoras(): Promise<void> {
        await this.click(this.LICUADO_PROCESADO_GASIFICAD)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaLicuadorasProcesadorasGasificadoras(): Promise<void> {
        await this.clickElectroTecnologiaLicuadorasProcesadorasGasificadoras()
    }
}
