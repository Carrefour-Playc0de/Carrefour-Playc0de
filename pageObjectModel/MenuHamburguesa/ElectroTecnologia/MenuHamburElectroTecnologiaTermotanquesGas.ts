import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaTermotanquesGas extends BasePage {

    readonly TERMOTANQUES_GAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TERMOTANQUES_GAS =this.page.locator('//a [@id="menu-item-category-termotanques-gas"]')
    }

    async clickElectroTecnologiaTermotanquesGas(): Promise<void> {
        await this.click(this.TERMOTANQUES_GAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaTermotanquesGas(): Promise<void> {
        await this.clickElectroTecnologiaTermotanquesGas()
    }
}
