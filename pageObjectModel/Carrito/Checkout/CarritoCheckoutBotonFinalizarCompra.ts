import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class CarritoCheckoutBotonFinalizarCompra extends BasePage {

    readonly BOTON_FINALIZAR_COMPRA: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_FINALIZAR_COMPRA = this.page.locator('//a [@id="cart-button"]')
    }

    async clickCheckoutBotonFinalizarCompra(): Promise<void> {
        await this.click(this.BOTON_FINALIZAR_COMPRA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToCarritoCheckoutBotonFinalizarCompra(): Promise<void> {
        await this.clickCheckoutBotonFinalizarCompra()
    }
}
