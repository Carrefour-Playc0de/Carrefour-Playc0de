import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaTermotanquesElectricos extends BasePage {

    readonly TERMOTANQUES_ELECTRICOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TERMOTANQUES_ELECTRICOS =this.page.locator('//a [@id="menu-item-category-termotanques-electricos"]')
    }

    async clickElectroTecnologiaTermotanquesElectricos(): Promise<void> {
        await this.click(this.TERMOTANQUES_ELECTRICOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaTermotanquesElectricos(): Promise<void> {
        await this.clickElectroTecnologiaTermotanquesElectricos()
    }
}
