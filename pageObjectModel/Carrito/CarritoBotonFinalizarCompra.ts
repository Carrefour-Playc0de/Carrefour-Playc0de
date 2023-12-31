import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class CarritoBotonFinalizarCompra extends BasePage {

    readonly BOTON_FINALIZAR_COMPRA: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_FINALIZAR_COMPRA = this.page.locator('//button [@id="proceed-to-checkout"]')
    }

    async clickBotonFinalizarCompra(): Promise<void> {
        await this.click(this.BOTON_FINALIZAR_COMPRA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToCarritoBotonFinalizarCompra(): Promise<void> {
        await this.clickBotonFinalizarCompra()
    }
}
