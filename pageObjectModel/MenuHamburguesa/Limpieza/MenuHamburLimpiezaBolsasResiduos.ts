import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaBolsasResiduos extends BasePage {

    readonly BOLSAS_RESIDUOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOLSAS_RESIDUOS = this.page.locator('//a [@id="menu-item-category-bolsas-residuos"]')
    }

    async clickLimpiezaBolsasResiduos(): Promise<void> {
        await this.click(this.BOLSAS_RESIDUOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLimpiezaBolsasResiduos(): Promise<void> {
        await this.clickLimpiezaBolsasResiduos()
    }
}
