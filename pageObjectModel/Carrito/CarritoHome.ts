import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class CarritoHome extends BasePage {

    readonly CARRITO: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CARRITO = this.page.locator('//div[@class=\'valtech-carrefourar-minicart-quantity-total-0-x-quantityTotal\']//*[name()=\'svg\']')
    }

    async clickCarritoHome(): Promise<void> {
        await this.click(this.CARRITO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToCarritoHome(): Promise<void> {
        await this.clickCarritoHome()
    }
}
