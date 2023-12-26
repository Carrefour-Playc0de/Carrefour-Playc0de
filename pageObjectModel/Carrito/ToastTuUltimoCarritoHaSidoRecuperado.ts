import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class ToastTuUltimoCarritoHaSidoRecuperado extends BasePage {

    readonly CLOSE_X_TOAST_TUCHSR: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.CLOSE_X_TOAST_TUCHSR = this.page.locator("//div [@class='vtex-alert__close-icon pointer flex items-center pa3 white nr3 nv3']//*[name()='svg']")
        this.CLOSE_X_TOAST_TUCHSR = this.page.locator('//div [@class="vtex-alert__close-icon pointer flex items-center pa3 white nr3 nv3"]')
    }

    async clickCloseXToastTuUltimoCarritoHaSidoRecuperado(): Promise<void> {
        await this.click(this.CLOSE_X_TOAST_TUCHSR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async ToastTuUltimoCarritoHaSidoRecuperadoX(): Promise<void> {
        await this.clickCloseXToastTuUltimoCarritoHaSidoRecuperado()
    }
}
