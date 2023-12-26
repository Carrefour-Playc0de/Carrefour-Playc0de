import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaJarrasElectricas extends BasePage {

    readonly JARRAS_ELECTRICAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.JARRAS_ELECTRICAS =this.page.locator('//a [@id="menu-item-category-jarras-electricas"]')
    }

    async clickElectroTecnologiaJarrasElectricas(): Promise<void> {
        await this.click(this.JARRAS_ELECTRICAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaJarrasElectricas(): Promise<void> {
        await this.clickElectroTecnologiaJarrasElectricas()
    }
}
