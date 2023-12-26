import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPanaderiaElaboracionCarrefour extends BasePage {

    readonly ELABORACION_CARREFOUR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ELABORACION_CARREFOUR = this.page.locator('//a [@id="menu-item-category-elaboracion-carrefour"]')
    }

    async clickPanaderiaElaboracionCarrefour(): Promise<void> {
        await this.click(this.ELABORACION_CARREFOUR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPanaderiaElaboracionCarrefour(): Promise<void> {
        await this.clickPanaderiaElaboracionCarrefour()
    }
}
