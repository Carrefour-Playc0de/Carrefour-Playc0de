import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaCafeteras extends BasePage {

    readonly CAFETERAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CAFETERAS = this.page.locator('//a [@id="menu-item-category-cafeteras"]')
    }

    async clickElectroTecnologiaCafeteras(): Promise<void> {
        await this.click(this.CAFETERAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaCafeteras(): Promise<void> {
        await this.clickElectroTecnologiaCafeteras()
    }
}
