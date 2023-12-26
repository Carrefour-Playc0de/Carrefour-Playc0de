import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class ModalSuscribite extends BasePage {

    readonly MODAL_SUSCRIBITE: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.MODAL_SUSCRIBITE = this.page.locator('//div[@class=\'dy-modal-contents\']//div[@class=\'dy-lb-close\']')
        this.MODAL_SUSCRIBITE = this.page.locator('div[class=\'dy-modal-contents\'] div[class=\'dy-lb-close\']')
        // this.MODAL_SUSCRIBITE = this.page.locator('//a[@class=\'button_17469489\']')
    }

    async clickXModalSuscribite(): Promise<void> {
        await this.click(this.MODAL_SUSCRIBITE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToModalSuscribite(): Promise<void> {
        await this.clickXModalSuscribite()
    }
}
