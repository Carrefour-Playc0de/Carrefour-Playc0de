import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class ModalSuscribite extends BasePage {

    readonly MODAL_SUSCRIBITE: Locator
    readonly CERRAR_MODAL_SUSCRIBITE: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.MODAL_SUSCRIBITE = this.page.locator('//div [@class="content_17469489"]')
        // this.MODAL_SUSCRIBITE = this.page.locator('//div [text()="¡Enterate antes que nadie de nuestras ofertas!"]')
        // this.CERRAR_MODAL_SUSCRIBITE = this.page.locator('//div [@class="dy-modal-contents"] /div [@class="dy-lb-close"]')
        // this.CERRAR_MODAL_SUSCRIBITE = this.page.locator('.dy-modal-contents > .dy-lb-close')
    }

    // async clickModalSuscribite(): Promise<void> {
    //     await this.click(this.MODAL_SUSCRIBITE)
    //     await this.page.waitForLoadState("domcontentloaded")
    //     await this.page.waitForFunction(() => document.readyState === 'complete')
    //     await this.page.waitForTimeout(3000)
    // }
    async clickXCerrarModalSuscribite(): Promise<void> {
        // await this.click(this.CERRAR_MODAL_SUSCRIBITE)
        await this.page.mouse.click(200, 200)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToModalSuscribiteAndClose(): Promise<void> {
        // await this.clickModalSuscribite()
        await this.clickXCerrarModalSuscribite()
    }
}
