import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaGalletitasBizcochitosTostadas extends BasePage {

    readonly GALLETITAS_BIZCOCHITOS_TOSTADAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GALLETITAS_BIZCOCHITOS_TOSTADAS = this.page.locator('//a [@id="menu-item-category-galletitas-bizcochitos-tostadas"]')
    }

    async clickDesayunoMeriendaGalletitasBizcochitosTostadas(): Promise<void> {
        await this.click(this.GALLETITAS_BIZCOCHITOS_TOSTADAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaGalletitasBizcochitosTostadas(): Promise<void> {
        await this.clickDesayunoMeriendaGalletitasBizcochitosTostadas()
    }
}
