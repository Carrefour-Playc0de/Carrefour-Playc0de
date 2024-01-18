import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class CarritoBotonPlusProductoUno extends BasePage {

    readonly BOTON_PLUS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_PLUS = this.page.locator("//button[contains(@aria-label,'+')]")
        // this.BOTON_PLUS = this.page.locator("//div[@class='vtex-numeric-stepper__plus-button-container numeric-stepper__plus-button-container z-2 order-2 flex-none']")
    }

    async clickBotonPlusProductoUno(): Promise<void> {
        for (let i = 0; i < 4; i++) {
            await this.click(this.BOTON_PLUS)
        }
        await this.page.waitForTimeout(3000)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToCarritoBotonPlusProductoUno(): Promise<void> {
        await this.clickBotonPlusProductoUno()
    }
}

