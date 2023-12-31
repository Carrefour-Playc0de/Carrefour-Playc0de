import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class CarritoBotonPlusProductoUno extends BasePage {

    readonly BOTON_PLUS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_PLUS = this.page.locator('//div [contains(@class,"valtech-carrefourar-cart-quantity-0-x-cartQuantity")]//button[contains(@aria-label,"+")]')
    }

    async clickBotonPlusProductoUno(): Promise<void> {
        await this.click(this.BOTON_PLUS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToCarritoBotonPlusProductoUno(): Promise<void> {
        await this.clickBotonPlusProductoUno()
    }
}
