import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilResmasArticulosOficina extends BasePage {

    readonly RESMAS_ARTICULOS_OFICINA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.RESMAS_ARTICULOS_OFICINA = this.page.locator('//a [@id="menu-item-category-resmas-oficina"]')
    }

    async clickBazarTextilResmasArticulosOficina(): Promise<void> {
        await this.click(this.RESMAS_ARTICULOS_OFICINA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilResmasArticulosOficina(): Promise<void> {
        await this.clickBazarTextilResmasArticulosOficina()
    }
}
