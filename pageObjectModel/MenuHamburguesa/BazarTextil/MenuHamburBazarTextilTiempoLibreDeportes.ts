import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilTiempoLibreDeportes extends BasePage {

    readonly TIEMPO_LIBRE_DEPORTES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TIEMPO_LIBRE_DEPORTES = this.page.locator('//a [@id="menu-item-category-tiempo-libre-deportes"]')
    }

    async clickBazarTextilTiempoLibreDeportes (): Promise<void> {
        await this.click(this.TIEMPO_LIBRE_DEPORTES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilTiempoLibreDeportes (): Promise<void> {
        await this.clickBazarTextilTiempoLibreDeportes()
    }
}
