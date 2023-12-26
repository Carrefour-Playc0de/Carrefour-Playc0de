import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaTelefoFijosInalam extends BasePage {

    readonly TELEFONOS_FIJOS_INALAMBRICOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TELEFONOS_FIJOS_INALAMBRICOS =this.page.locator('//a [@id="menu-item-category-telefonos-fijos-inalambricos"]')
    }

    async clickElectroTecnologiaTelefoFijosInalam(): Promise<void> {
        await this.click(this.TELEFONOS_FIJOS_INALAMBRICOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaTelefoFijosInalam(): Promise<void> {
        await this.clickElectroTecnologiaTelefoFijosInalam()
    }
}
