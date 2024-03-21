import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaProteccionFemenina extends BasePage {

    readonly PROTECCION_FEMENINA: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROTECCION_FEMENINA = this.page.locator('//* [@id="menu-item-category-proteccion-femenina"]')
    }

    async clickPerfumeriaProteccionFemenina(): Promise<void> {
        await this.click(this.PROTECCION_FEMENINA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaProteccionFemenina(): Promise<void> {
        await this.clickPerfumeriaProteccionFemenina()
    }
}
