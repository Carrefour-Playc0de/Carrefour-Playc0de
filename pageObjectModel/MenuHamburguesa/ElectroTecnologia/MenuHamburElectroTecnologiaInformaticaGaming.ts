import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaInformaticaGaming extends BasePage {

    readonly INFORMATICA_GAMING: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.INFORMATICA_GAMING =this.page.locator('//a [@id="menu-item-category-informatica-gaming"]')
    }

    async clickElectroTecnologiaInformaticaGaming(): Promise<void> {
        await this.click(this.INFORMATICA_GAMING)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaInformaticaGaming(): Promise<void> {
        await this.clickElectroTecnologiaInformaticaGaming()
    }
}
