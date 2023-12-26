import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class SeleccionaTienda extends BasePage {

    readonly CLOSE_X_TOAST_TUCHSR: Locator
    readonly SELECCIONA_TIENDA: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CLOSE_X_TOAST_TUCHSR = this.page.locator('//div [@class="vtex-alert__close-icon pointer flex items-center pa3 white nr3 nv3"]')
        this.SELECCIONA_TIENDA = this.page.locator("//p[contains(text(),'SELECCIONÁ TIENDA')]")
    }

    async clickXCloseToastTuUltimoCarritoHaSidoRecuperado(): Promise<void> {
        await this.click(this.CLOSE_X_TOAST_TUCHSR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async clickSeleccionaTienda(): Promise<void> {
        await this.click(this.SELECCIONA_TIENDA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToSeleccionaTienda(): Promise<void> {
        await this.clickXCloseToastTuUltimoCarritoHaSidoRecuperado()
        await this.clickSeleccionaTienda()
    }
}
