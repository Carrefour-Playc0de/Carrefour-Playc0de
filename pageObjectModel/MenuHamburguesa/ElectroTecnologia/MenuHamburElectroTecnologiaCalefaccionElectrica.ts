import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaCalefaccionElectrica extends BasePage {

    readonly CALEFACCION_ELECTRICA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CALEFACCION_ELECTRICA = this.page.locator('//a [@id="menu-item-category-calefaccion-electrica"]')
    }

    async clickElectroTecnologiaCalefaccionElectrica(): Promise<void> {
        await this.click(this.CALEFACCION_ELECTRICA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaCalefaccionElectrica(): Promise<void> {
        await this.clickElectroTecnologiaCalefaccionElectrica()
    }
}
