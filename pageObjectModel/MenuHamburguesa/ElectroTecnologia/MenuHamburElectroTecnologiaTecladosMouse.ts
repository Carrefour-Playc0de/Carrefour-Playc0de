import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaTecladosMouse extends BasePage {

    readonly TECLADOS_MOUSE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TECLADOS_MOUSE =this.page.locator('//a [@id="menu-item-category-teclados-mouse"]')
    }

    async clickElectroTecnologiaTecladosMouse(): Promise<void> {
        await this.click(this.TECLADOS_MOUSE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaTecladosMouse(): Promise<void> {
        await this.clickElectroTecnologiaTecladosMouse()
    }
}
