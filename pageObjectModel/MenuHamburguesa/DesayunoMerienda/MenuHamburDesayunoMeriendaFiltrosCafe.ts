import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaFiltrosCafe extends BasePage {

    readonly FILTROS_CAFE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FILTROS_CAFE = this.page.locator('//a [@id="menu-item-category-filtros-cafe"]');
    }

    async clickDesayunoMeriendaFiltrosCafe(): Promise<void> {
        await this.click(this.FILTROS_CAFE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaFiltrosCafe(): Promise<void> {
        await this.clickDesayunoMeriendaFiltrosCafe()
    }
}
