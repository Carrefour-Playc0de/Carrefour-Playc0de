import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenConservasLegumbresVegetales extends BasePage {

    readonly CONSERVAS_LEGUMBRES_VEGETALES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CONSERVAS_LEGUMBRES_VEGETALES = this.page.locator('//a [@id="menu-item-category-conservas-legumbres-vegetales"]')
    }

    async clickAlmacenConservasLegumbresVegetales(): Promise<void> {
        await this.click(this.CONSERVAS_LEGUMBRES_VEGETALES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenConservasLegumbresVegetales(): Promise<void> {
        await this.clickAlmacenConservasLegumbresVegetales()
    }
}
