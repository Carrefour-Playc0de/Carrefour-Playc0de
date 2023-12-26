import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaVentiladClimatizad extends BasePage {

    readonly VENTILADORES_CLIMATIZADORES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.VENTILADORES_CLIMATIZADORES = this.page.locator('//a [@id="menu-item-category-ventiladores-climatizadores"]')
    }

    async clickElectroTecnologiaVentiladClimatizad(): Promise<void> {
        await this.click(this.VENTILADORES_CLIMATIZADORES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaVentiladClimatizad(): Promise<void> {
        await this.clickElectroTecnologiaVentiladClimatizad()
    }
}
