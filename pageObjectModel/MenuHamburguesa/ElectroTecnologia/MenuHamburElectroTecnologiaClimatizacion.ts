import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaClimatizacion extends BasePage {

    readonly CLIMATIZACION: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CLIMATIZACION =this.page.locator('//a [@id="menu-item-category-climatizacion"]')
    }

    async clickElectroTecnologiaClimatizacion(): Promise<void> {
        await this.click(this.CLIMATIZACION)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaClimatizacion(): Promise<void> {
        await this.clickElectroTecnologiaClimatizacion()
    }
}
