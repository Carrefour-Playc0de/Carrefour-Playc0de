import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVUrquiza extends BasePage {

    readonly HIPER_VILLA_URQUIZA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HIPER_VILLA_URQUIZA = this.page.locator("(//p[normalize-space()='Hiper Villa Urquiza'])[1]")
    }

    async clickHiperVillaUrquiza(): Promise<void> {
        await this.click(this.HIPER_VILLA_URQUIZA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToTiendaRetiroDriveSuperProvCiudAutonoBsAsPartidoHVillaUrquiza(): Promise<void> {
        await this.clickHiperVillaUrquiza()
    }
}
