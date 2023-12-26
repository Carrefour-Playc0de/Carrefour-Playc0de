import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaJuguerasExprimidores extends BasePage {

    readonly JUGUERAS_EXPRIMIDORES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.JUGUERAS_EXPRIMIDORES =this.page.locator('//a [@id="menu-item-category-jugueras-exprimidores"]')
    }

    async clickElectroTecnologiaJuguerasExprimidores(): Promise<void> {
        await this.click(this.JUGUERAS_EXPRIMIDORES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaJuguerasExprimidores(): Promise<void> {
        await this.clickElectroTecnologiaJuguerasExprimidores()
    }
}
