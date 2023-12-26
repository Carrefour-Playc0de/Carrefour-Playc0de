import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class CerrarModalComoQueresRecibirCompra extends BasePage {

    readonly CERRAR_MODAL: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CERRAR_MODAL = this.page.locator("//button[@class='valtech-carrefourar-region-locator-0-x-closeIconButton valtech-carrefourar-region-locator-0-x-closeIconButton--locator pa4 pointer bg-transparent transparent bn pointer']//*[name()='svg']//*[name()='use' and contains(@href,'#sti-close')]")
    }

    async clickCerrarModalComoQueresRecibirCompra(): Promise<void> {
        await this.click(this.CERRAR_MODAL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToCerrarModalComoQueresRecibirCompra(): Promise<void> {
        await this.clickCerrarModalComoQueresRecibirCompra()
    }
}
