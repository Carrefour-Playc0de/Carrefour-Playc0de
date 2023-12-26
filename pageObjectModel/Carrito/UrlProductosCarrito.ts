import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class UrlProductosCarrito extends BasePage {

    readonly CARRITO: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CARRITO = this.page.locator('//div[@class=\'valtech-carrefourar-incompatible-cart-1-x-container valtech-carrefourar-incompatible-cart-1-x-isAvailable \']//div[@class=\'vtex-button__label flex items-center justify-center h-100 ph6 \']')

    }

    async clickCarrito(): Promise<void> {
        await this.click(this.CARRITO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToUrlProductosCarrito(): Promise<void> {
        await this.clickCarrito()
    }
}
