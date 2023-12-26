import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaPlanchitasPelo extends BasePage {

    readonly PLANCHITAS_PELO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PLANCHITAS_PELO =this.page.locator('//a [@id="menu-item-category-planchitas-pelo"]')
    }

    async clickElectroTecnologiaPlanchitasPelo(): Promise<void> {
        await this.click(this.PLANCHITAS_PELO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaPlanchitasPelo(): Promise<void> {
        await this.clickElectroTecnologiaPlanchitasPelo()
    }
}
