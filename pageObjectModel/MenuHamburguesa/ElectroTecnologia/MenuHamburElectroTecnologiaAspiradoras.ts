import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaAspiradoras extends BasePage {

    readonly ASPIRADORAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.ASPIRADORAS = this.page.locator('//div[contains(text(),\'Aspiradoras\')]')
        this.ASPIRADORAS = this.page.locator('//a [@id="menu-item-category-aspiradoras"]')
    }

    async clickElectroTecnologiaAspiradoras(): Promise<void> {
        await this.click(this.ASPIRADORAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaAspiradoras(): Promise<void> {
        await this.clickElectroTecnologiaAspiradoras()
    }
}
