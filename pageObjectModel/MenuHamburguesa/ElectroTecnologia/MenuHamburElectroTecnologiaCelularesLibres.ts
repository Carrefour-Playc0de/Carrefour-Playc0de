import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaCelularesLibres extends BasePage {

    readonly CELULARES_LIBRES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CELULARES_LIBRES =this.page.locator('//a [@id="menu-item-category-celulares-libres"]')
    }

    async clickElectroTecnologiaCelularesLibres(): Promise<void> {
        await this.click(this.CELULARES_LIBRES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaCelularesLibres(): Promise<void> {
        await this.clickElectroTecnologiaCelularesLibres()
    }
}
