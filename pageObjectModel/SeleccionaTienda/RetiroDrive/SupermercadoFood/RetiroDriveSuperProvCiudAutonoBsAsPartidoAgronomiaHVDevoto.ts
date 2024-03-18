import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVDevoto extends BasePage {

    readonly HIPER_VILLA_DEVOTO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HIPER_VILLA_DEVOTO = this.page.locator("(//p[normalize-space()='Hiper Villa Devoto'])[1]")
    }

    async clickHiperVillaDevoto(): Promise<void> {
        await this.click(this.HIPER_VILLA_DEVOTO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToTiendaRetiroDriveSuperProvCiudAutonoBsAsPartidoHVDevoto(): Promise<void> {
        await this.clickHiperVillaDevoto()
    }
}
