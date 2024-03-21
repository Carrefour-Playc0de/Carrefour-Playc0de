import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaProteccionAdultos extends BasePage {

    readonly PROTECCION_ADULTOS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROTECCION_ADULTOS = this.page.locator('//* [@id="menu-item-category-proteccion-adultos"]')
        // Proteccion para Adultos
    }

    async clickPerfumeriaProteccionAdultos(): Promise<void> {
        await this.click(this.PROTECCION_ADULTOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaProteccionAdultos(): Promise<void> {
        await this.clickPerfumeriaProteccionAdultos()
    }
}
