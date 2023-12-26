import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaCuidadoPersonalSalud extends BasePage {

    readonly CUIDADO_PERSONAL_SALUD: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CUIDADO_PERSONAL_SALUD =this.page.locator('//a [@id="menu-item-category-cuidado-salud"]')
    }

    async clickElectroTecnologiaCuidadoPersonalSalud(): Promise<void> {
        await this.click(this.CUIDADO_PERSONAL_SALUD)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaCuidadoPersonalSalud(): Promise<void> {
        await this.clickElectroTecnologiaCuidadoPersonalSalud()
    }
}
