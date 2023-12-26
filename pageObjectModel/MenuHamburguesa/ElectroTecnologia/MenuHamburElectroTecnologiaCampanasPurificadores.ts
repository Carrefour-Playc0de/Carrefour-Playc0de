import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaCampanasPurificadores extends BasePage {

    readonly CAMPANAS_PURIFICADORES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CAMPANAS_PURIFICADORES = this.page.locator('//a [@id="menu-item-category-campanas-purificadores"]')
    }

    async clickElectroTecnologiaCampanasPurificadores(): Promise<void> {
        await this.click(this.CAMPANAS_PURIFICADORES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaCampanasPurificadores(): Promise<void> {
        await this.clickElectroTecnologiaCampanasPurificadores()
    }
}
