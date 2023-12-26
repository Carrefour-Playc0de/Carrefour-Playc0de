import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilCubiertaAutos extends BasePage {

    readonly CUBIERTA_AUTOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CUBIERTA_AUTOS = this.page.locator('//a [@id="menu-item-category-cubiertas-autos"]');
    }

    async clickBazarTextilCubiertaAutos(): Promise<void> {
        await this.click(this.CUBIERTA_AUTOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilCubiertaAutos(): Promise<void> {
        await this.clickBazarTextilCubiertaAutos()
    }
}
