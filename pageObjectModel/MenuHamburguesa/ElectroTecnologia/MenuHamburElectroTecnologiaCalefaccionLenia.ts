import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaCalefaccionLenia extends BasePage {

    readonly CALEFACCION_LENIA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CALEFACCION_LENIA =this.page.locator('//a [@id="menu-item-category-calefaccion-leña"]')
    }

    async clickElectroTecnologiaCalefaccionLenia(): Promise<void> {
        await this.click(this.CALEFACCION_LENIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaCalefaccionLenia(): Promise<void> {
        await this.clickElectroTecnologiaCalefaccionLenia()
    }
}
