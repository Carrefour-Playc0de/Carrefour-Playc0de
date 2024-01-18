import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class CarritoHome extends BasePage {

    readonly CARRITO: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CARRITO = this.page.locator('//span[@class="vtex-minicart-2-x-minicartIconContainer gray relative"]//div[@class="valtech-carrefourar-minicart-quantity-total-0-x-quantityTotal"]')
        // this.CARRITO = this.page.locator('//span[@class=”vtex-minicart-2-x-minicartIconContainer gray relative”]//div[@class=”valtech-carrefourar-minicart-quantity-total-0-x-quantityTotal”]//*[name()=”svg”]//*[name()=”use” and contains(@href,”#hpa-cart”)]')
    }

    async clickCarritoHome(): Promise<void> {
        await this.click(this.CARRITO)
        await this.page.waitForTimeout(3000)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToCarritoHome(): Promise<void> {
        await this.clickCarritoHome()
    }
}
