import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaMaquinasCoser extends BasePage {

    readonly MAQUINAS_COSER: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MAQUINAS_COSER =this.page.locator('//a [@id="menu-item-category-maquinas-coser"]')
    }

    async clickElectroTecnologiaMaquinasCoser(): Promise<void> {
        await this.click(this.MAQUINAS_COSER)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaMaquinasCoser(): Promise<void> {
        await this.clickElectroTecnologiaMaquinasCoser()
    }
}
