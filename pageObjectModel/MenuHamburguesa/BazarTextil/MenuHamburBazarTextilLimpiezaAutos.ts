import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilLimpiezaAutos extends BasePage {

    readonly LIMPIEZA_AUTOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIMPIEZA_AUTOS = this.page.locator('//a [@id="menu-item-category-limpieza-autos"]')
    }

    async clickBazarTextilLimpiezaAutos(): Promise<void> {
        await this.click(this.LIMPIEZA_AUTOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilLimpiezaAutos(): Promise<void> {
        await this.clickBazarTextilLimpiezaAutos()
    }
}
