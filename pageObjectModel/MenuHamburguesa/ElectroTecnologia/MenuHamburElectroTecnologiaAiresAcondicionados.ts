import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaAiresAcondicionados extends BasePage {

    readonly AIRES_ACONDICIONADOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.AIRES_ACONDICIONADOS = this.page.locator('//div[contains(text(),\'Aires acondicionados\')]')
        this.AIRES_ACONDICIONADOS = this.page.locator('//a [@id="menu-item-category-aires-acondicionadores"]')
    }

    async clickElectroTecnologiaAiresAcondicionados(): Promise<void> {
        await this.click(this.AIRES_ACONDICIONADOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaAiresAcondicionados(): Promise<void> {
        await this.clickElectroTecnologiaAiresAcondicionados()
    }
}
