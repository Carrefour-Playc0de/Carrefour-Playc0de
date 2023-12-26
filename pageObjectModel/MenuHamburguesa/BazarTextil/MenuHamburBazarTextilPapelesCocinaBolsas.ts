import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilPapelesCocinaBolsas extends BasePage {

    readonly PAPELES_COCINA_BOLSAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PAPELES_COCINA_BOLSAS = this.page.locator('//a [@id="menu-item-category-papeles-bolsas-filtros"]')
    }

    async clickBazarTextilPapelesCocinaBolsas(): Promise<void> {
        await this.click(this.PAPELES_COCINA_BOLSAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilPapelesCocinaBolsas(): Promise<void> {
        await this.clickBazarTextilPapelesCocinaBolsas()
    }
}
