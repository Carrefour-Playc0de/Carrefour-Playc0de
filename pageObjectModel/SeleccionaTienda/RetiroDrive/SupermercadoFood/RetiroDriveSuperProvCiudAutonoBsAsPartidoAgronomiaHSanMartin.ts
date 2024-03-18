import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHSanMartin extends BasePage {

    readonly HIPER_SAN_MARTIN: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HIPER_SAN_MARTIN = this.page.locator("(//p[normalize-space()='Hiper San Martín'])[1]")
    }

    async clickHiperSanMartin(): Promise<void> {
        await this.click(this.HIPER_SAN_MARTIN)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToTiendaRetiroDriveSuperProvCiudAutonoBsAsPartidoHSanMartin(): Promise<void> {
        await this.clickHiperSanMartin()
    }
}
