import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaCocinasHornos extends BasePage {

    readonly COCINAS_HORNOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.COCINAS_HORNOS =this.page.locator('//a [@id="menu-item-category-cocinas-hornos"]')
    }

    async clickElectroTecnologiaCocinasHornos(): Promise<void> {
        await this.click(this.COCINAS_HORNOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaCocinasHornos(): Promise<void> {
        await this.clickElectroTecnologiaCocinasHornos()
    }
}
