import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class CarritoCheckoutProfileDatosPersonales extends BasePage {

    readonly DATOS_PERSONALES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DATOS_PERSONALES = this.page.locator('')
    }

    async clickCheckoutBotonFinalizarCompra(): Promise<void> {
        await this.click(this.DATOS_PERSONALES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToCarritoCheckoutProfileDatosPersonales(): Promise<void> {
        await this.clickCheckoutBotonFinalizarCompra()
    }
}
