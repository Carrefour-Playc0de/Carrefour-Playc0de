import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaPalillosVelasFosforos extends BasePage {

    readonly PALILLOS_VELAS_FOSFOROS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PALILLOS_VELAS_FOSFOROS = this.page.locator('//a [@id="menu-item-category-palillos-velas-fosforos"]')
    }

    async clickLimpiezaPalillosVelasFosforos(): Promise<void> {
        await this.click(this.PALILLOS_VELAS_FOSFOROS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLimpiezaPalillosVelasFosforos(): Promise<void> {
        await this.clickLimpiezaPalillosVelasFosforos()
    }
}
